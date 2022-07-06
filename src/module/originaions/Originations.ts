import { httpClient } from '../../api'
import { AxiosResponse } from 'axios'

type Originations = {
  id: string
  name: string
}

export class QualificationApi {
  static getQualifications(): Promise<Originations[]> {
    return httpClient
      .get(`/api/miscellaneous/originations`)
      .then((response: AxiosResponse<Originations[]>) => {
        return response.data
      })
  }
}
