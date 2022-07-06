import { httpClient } from '../../api'
import { AxiosResponse } from 'axios'

export type Leads_cf_categories = {
  id: number
  fte_fees: number
  expenses_percentage: number
}

export class Leads_cf_categoriesApi {
  static getLeads_cf_categories(): Promise<Leads_cf_categories[]> {
    return httpClient
      .get(`/api/leads_cf_categories`)
      .then((response: AxiosResponse<Leads_cf_categories[]>) => {
        return response.data
      })
  }
}
