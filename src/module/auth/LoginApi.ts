import { httpClient } from '../../api'
import { log, prettyPrint } from '../../misc/log'
import { AxiosResponse } from 'axios'

type LoginApiResponse = {
  auth_token: string
  refresh_token: string
  user_id: number
  cf: boolean
  mc: boolean
}

export type LoginResponse = {
  authToken: string
  refreshToken: string
  userId: number
  cf: boolean
  mc: boolean
}

export class LoginApi {
  static login(
    email: string,
    password: string,
    token: string
  ): Promise<LoginResponse> {
    const completeEmail =
      email.indexOf('@') === -1 ? `${email}@deltapartnersgroup.com` : email
    return httpClient
      .post(
        `/api/sessions?email=${completeEmail}&password=${password}&token_id=${token}`
      )
      .then((response: AxiosResponse<LoginApiResponse>) => {
        // log.response(`/api/sessions response`, prettyPrint(response))
        log.response(`/api/sessions response.data`, prettyPrint(response.data))
        const loginApiResponse = response.data
        return {
          authToken: loginApiResponse.auth_token,
          refreshToken: loginApiResponse.refresh_token,
          userId: loginApiResponse.user_id,
          cf: loginApiResponse.cf,
          mc: loginApiResponse.mc,
        }
      })
  }
}
