import { httpClient } from '../../api'
import { AxiosResponse } from 'axios'

type Leads_cf_categories = {
  id: number
  fte_fees: number
  expenses_percentage: number
}

export class QualificationApi {
  static getQualifications(): Promise<Leads_cf_categories> {
    return httpClient
      .get(`/api/leads_cf_categories`)
      .then((response: AxiosResponse<Leads_cf_categories>) => {
        return response.data
      })
  }
}
