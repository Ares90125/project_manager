import * as React from 'react'
import { Account } from './Account'
import { AccountApi } from './AccountApi'
import { extractApiErrorMessage } from '../../api'
import { log } from '../../misc/log'

export function useAccounts(): 'loading' | Account[] | Error {
  const [result, setResult] = React.useState<'loading' | Account[] | Error>(
    'loading'
  )

  React.useEffect(() => {
    AccountApi.getAccounts()
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
