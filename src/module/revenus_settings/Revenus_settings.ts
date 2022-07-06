import { httpClient } from '../../api'
import { Mode } from '../mode/Mode'
import { AxiosResponse } from 'axios'

type Revenus_settings = {
  id: number
  fte_fees: number
  expenses_percentage: number
}

export class QualificationApi {
  static getQualifications(): Promise<Revenus_settings> {
    return httpClient
      .get(`/api/revenue_settings`)
      .then((response: AxiosResponse<Revenus_settings>) => {
        return response.data
      })
  }
}
