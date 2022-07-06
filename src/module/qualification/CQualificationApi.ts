import * as React from 'react'
import { Mode } from '../mode/Mode'
import { QualificationApi,GetQualificationsResponse } from './QualificationApi'
import { extractApiErrorMessage } from '../../api'
import { log } from '../../misc/log'

export function useAccounts(mode: Mode): 'loading' | GetQualificationsResponse | Error {
  const [result, setResult] = React.useState<'loading' | GetQualificationsResponse | Error>(
    'loading'
  )

  React.useEffect(() => {
    QualificationApi.getQualifications(mode)
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
