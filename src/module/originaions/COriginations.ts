import * as React from 'react'
import { OriginationsApi,Originations } from './Originations'
import { extractApiErrorMessage } from '../../api'
import { log } from '../../misc/log'

export function useAccounts(): 'loading' | Originations[] | Error {
  const [result, setResult] = React.useState<'loading' | Originations[] | Error>(
    'loading'
  )

  React.useEffect(() => {
    OriginationsApi.getOriginations()
      .then((accountMembers) => {
        setResult(accountMembers)
      })
      .catch((error) => {
        const errorMessage = extractApiErrorMessage(error)
        log.error(`AccountApi.getAccounts error`, errorMessage)
        setResult(Error(errorMessage))
      })
  }, [])

  return result
}
