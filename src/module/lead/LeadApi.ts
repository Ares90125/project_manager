import { httpClient } from '../../api'
import { AxiosResponse } from 'axios'
import { LeadCF } from './LeadCF'
import { LeadMC } from './LeadMC'
import { OrderLeadBy } from './OrderLeadBy'
import { ShowMonths } from './ShowMonths'
import { QualificationMatrixType } from './useQualificationMatrix'

export class LeadApi {
  static getQualificationMatrix(
    type: string
  ): Promise<QualificationMatrixType> {
    return httpClient
      .get(`/api/qualification_matrix?type=${type}`)
      .then((response: AxiosResponse<QualificationMatrixType>) => {
        return response.data
      })
  }
  static getLeadsMC(
    orderBy: OrderLeadBy,
    showMonths: ShowMonths
  ): Promise<LeadMC[]> {
    return httpClient
      .get(
        `/api/leads_consulting?order_by=${orderBy}&next_months=${showMonths}`
      )
      .then((response: AxiosResponse<LeadMC[]>) => {
        return response.data
      })
  }

  static getLeadMCById(
    id: number
  ): Promise<LeadMC> {
    return httpClient
      .get(`/api/leads_consulting/${id}`)
      .then((response: AxiosResponse<LeadMC>) => {
        return response.data
      })
  }

  static getLeadsCF(
    orderBy: OrderLeadBy,
    showMonths: ShowMonths
  ): Promise<LeadCF[]> {
    return httpClient
      .get(`/api/leads_cf?order_by=${orderBy}&next_months=${showMonths}`)
      .then((response: AxiosResponse<LeadCF[]>) => {
        return response.data
      })
  }

  static getLeadCFById(
    id: number
  ): Promise<LeadCF> {
    return httpClient
      .get(`/api/leads_cf/${id}`)
      .then((response: AxiosResponse<LeadCF>) => {
        return response.data
      })
  }
}
