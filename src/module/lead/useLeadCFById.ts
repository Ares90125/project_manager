import * as React from 'react'
import { LeadCF } from './LeadCF'
import { LeadApi } from './LeadApi'
import { extractApiErrorMessage } from '../../api'
import { log } from '../../misc/log'

export function useLeadCFById(
  id: number
): 'loading' | LeadCF | Error {
  const [result, setResult] = React.useState<'loading' | LeadCF | Error>(
    'loading'
  )

  React.useEffect(() => {
    setResult('loading')
    LeadApi.getLeadCFById(id)
      .then((lead) => {
        setResult(lead)
      })
      .catch((error) => {
        const errorMessage = extractApiErrorMessage(error)
        log.error(`LeadApi.getLeadCFById error`, errorMessage)
        setResult(Error(errorMessage))
      })
  }, [id])

  return result
}
