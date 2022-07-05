import * as React from 'react'
import { LeadMC } from './LeadMC'
import { LeadApi } from './LeadApi'
import { extractApiErrorMessage } from '../../api'
import { log } from '../../misc/log'
import { OrderLeadBy } from './OrderLeadBy'
import { ShowMonths } from './ShowMonths'

export function useLeadsMC(
  orderBy: OrderLeadBy,
  showMonths: ShowMonths
): 'loading' | LeadMC[] | Error {
  const [result, setResult] = React.useState<'loading' | LeadMC[] | Error>(
    'loading'
  )

  React.useEffect(() => {
    setResult('loading')
    LeadApi.getLeadsMC(orderBy, showMonths)
      .then((leads) => {
        setResult(leads)
      })
      .catch((error) => {
        const errorMessage = extractApiErrorMessage(error)
        log.error(`LeadApi.getLeadsMC error`, errorMessage)
        setResult(Error(errorMessage))
      })
  }, [orderBy, showMonths])

  return result
}
