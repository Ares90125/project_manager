import * as React from 'react'
import { LeadMC } from './LeadMC'
import { LeadApi } from './LeadApi'
import { extractApiErrorMessage } from '../../api'
import { log } from '../../misc/log'

export function useLeadMCById(
  id: number
): 'loading' | LeadMC | Error {
  const [result, setResult] = React.useState<'loading' | LeadMC | Error>(
    'loading'
  )

  React.useEffect(() => {
    setResult('loading')
    console.log('lead id ', id);
    LeadApi.getLeadMCById(id)
      .then((lead) => {
        setResult(lead)
      })
      .catch((error) => {
        const errorMessage = extractApiErrorMessage(error)
        log.error(`LeadApi.getLeadMCById error`, errorMessage)
        setResult(Error(errorMessage))
      })
  }, [id])

  return result
}
