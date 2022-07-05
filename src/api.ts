import axios, { AxiosError } from 'axios'
import { config } from './config'
import { userStore } from './module/user/UserStore'
import { log, prettyPrint, prettyPrintOmit } from './misc/log'

axios.defaults.baseURL = config.apiBaseUrl
axios.defaults.timeout = 12000
// axios.defaults.headers.post['Content-Type'] = 'application/json'
export const httpClient = axios.create()

httpClient.interceptors.request.use((requestConfig) => {
  const token = userStore.user?.authToken
  if (token) {
    // @ts-ignore
    requestConfig.headers['Authorization'] = 'Bearer ' + token
  }
  return requestConfig
})

// When the auth token expires error.response is:
// {
//   "data": {
//     "http_code": 400,
//     "http_text": "400 Bad Request",
//     "errors": {
//       "data": {
//         "code": 21,
//         "details": "Authentication token expired. Starting a new session is required"
//       }
//     }
//   },
//   "status": 400,
//   "statusText": undefined,
//   ...
// }
httpClient.interceptors.response.use(undefined, async (error) => {
  if (
    error.response &&
    error.response.status === 400 &&
    error.response.data.errors.data.code === 21
  ) {
    log.info('Server responded 400 - Expired JWT Token')
    userStore.logout()
  }
  return Promise.reject(error)
})

if (config.logNetworkRequests) {
  function responseError(error: any) {
    return `RESPONSE error - ${error.config.method.toUpperCase()} ${
      error.config.url
    }`
  }

  httpClient.interceptors.request.use(
    (requestConfig) => {
      log.request(
        `REQUEST success - ${requestConfig.method?.toUpperCase()} ${
          requestConfig.url
        }\n`,
        prettyPrint(requestConfig)
      )
      return requestConfig
    },
    (error) => {
      log.request(
        `REQUEST error - ${error.config.method.toUpperCase()} ${
          error.config.url
        }\n`,
        prettyPrint(error)
      )
      return Promise.reject(error)
    }
  )

  httpClient.interceptors.response.use(
    (response) => {
      // Response status code is 2XX
      /*
      if (response.config.url?.includes('/xyz')) {
        log.response(
          `RESPONSE ${response.config.url}\n`,
          prettyPrint(response).substr(0, 250)
        )
        return response
      }
      */
      let responseLog = prettyPrintOmit(response, ['request'])
      if (responseLog.length > 1800) {
        responseLog = responseLog.slice(0, 1800) + '(truncated)'
      }
      log.response(
        `RESPONSE success - ${response.config.method?.toUpperCase()} ${
          response.config.url
        }\n`,
        responseLog
      )
      return response
    },
    (error) => {
      // Response status code is _not_ 2XX
      log.response(
        `${responseError(error)} - error\n`,
        `status:`,
        error.response?.status,
        `\nmessage:`,
        prettyPrint(error.message)
      )
      log.response(
        `${responseError(error)} - error.config\n`,
        prettyPrint(error.config)
      )
      log.response(
        `${responseError(error)} - error.isAxiosError:`,
        error.isAxiosError
      )
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        log.response(
          `${responseError(error)} - error.response\n`,
          prettyPrintOmit(error.response, ['config', 'request'])
        )
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest
        log.response(
          `${responseError(error)} - error.request\n`,
          prettyPrint(error.request)
        )
      } else {
        // Something happened in setting up the request that triggered an Error
        log.response(
          `${responseError(error)} - no error.response nor error.request`
        )
      }
      return Promise.reject(error)
    }
  )
}

export function extractApiErrorMessage(
  error: Error | AxiosError | any
): string {
  if (axios.isAxiosError(error)) {
    // Access to config, request, and response
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const statusCode = error.response.status
      const serverErrorMessage = error.response.data?.errors?.data?.details
      return `${statusCode} - ${serverErrorMessage}`
    } else {
      return error.message
    }
  } else if (error instanceof Error) {
    // Just a stock error
    return error.message
  } else {
    return error.message ? error.message : 'Unknown error'
  }
}

export type PaginatedResponse<T> = {
  // We have to suppress this error because it's not possible to have an indexed
  // type together with another property of a different type.
  // @ts-ignore
  meta: {
    pagination: {
      total: number
      count: number
      per_page: number
      current_page: number
      total_pages: number
      links: {
        next: string
      }
    }
  }
  [p: string]: T
}
