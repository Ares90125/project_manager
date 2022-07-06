import * as React from 'react'
import { Leads_cf_categoriesApi,Leads_cf_categories } from './Leads_cf_categories'
import { extractApiErrorMessage } from '../../api'
import { log } from '../../misc/log'

export function useAccounts(): 'loading' | Leads_cf_categories[] | Error {
  const [result, setResult] = React.useState<'loading' | Leads_cf_categories[] | Error>(
    'loading'
  )

  React.useEffect(() => {
    Leads_cf_categoriesApi.getLeads_cf_categories()
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
