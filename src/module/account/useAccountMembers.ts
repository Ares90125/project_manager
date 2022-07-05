import * as React from 'react'
import { AccountMember } from './AccountMember'
import { AccountApi } from './AccountApi'
import { extractApiErrorMessage } from '../../api'
import { log } from '../../misc/log'

export function useAccountMembers(): 'loading' | AccountMember[] | Error {
  const [result, setResult] = React.useState<
    'loading' | AccountMember[] | Error
  >('loading')

  React.useEffect(() => {
    AccountApi.getAccountMembers()
      .then((accountMembers) => {
        setResult(accountMembers)
      })
      .catch((error) => {
        const errorMessage = extractApiErrorMessage(error)
        log.error(`AccountApi.getAccountMembers error`, errorMessage)
        setResult(Error(errorMessage))
      })
  }, [])

  return result
}
