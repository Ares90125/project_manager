import * as React from 'react'
import { LeadCF } from './LeadCF'
import { LeadApi } from './LeadApi'
import { extractApiErrorMessage } from '../../api'
import { log } from '../../misc/log'
import { OrderLeadBy } from './OrderLeadBy'
import { ShowMonths } from './ShowMonths'

export function useLeadsCF(
  orderBy: OrderLeadBy,
  showMonths: ShowMonths
): 'loading' | LeadCF[] | Error {
  const [result, setResult] = React.useState<'loading' | LeadCF[] | Error>(
    'loading'
  )

  React.useEffect(() => {
    setResult('loading')
    LeadApi.getLeadsCF(orderBy, showMonths)
      .then((leads) => {
        setResult(leads)
      })
      .catch((error) => {
        const errorMessage = extractApiErrorMessage(error)
        log.error(`LeadApi.getLeadsCF error`, errorMessage)
        setResult(Error(errorMessage))
      })
  }, [orderBy, showMonths])

  return result
}
