import { httpClient } from '../../api'
import { AxiosResponse } from 'axios'

export type Originations = {
  id: string
  name: string
}

export class OriginationsApi {
  static getOriginations(): Promise<Originations[]> {
    return httpClient
      .get(`/api/miscellaneous/originations`)
      .then((response: AxiosResponse<Originations[]>) => {
        return response.data
      })
  }
}
