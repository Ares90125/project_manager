import { httpClient } from '../../api'
import { Mode } from '../mode/Mode'
import { AxiosResponse } from 'axios'

type GetQualificationsResponse = {
  id: number
  name: string
  qualitative: 1
  questions: {
    id: number
    title: string
    weight: number
    created_at: number
    updated_at: number
    answers: {
      id: number
      text: 'Low'
      weight: number
      created_at: number
      updated_at: number
    }[]
  }[]
}

export class QualificationApi {
  static getQualifications(mode: Mode): Promise<GetQualificationsResponse> {
    const type = mode === 'CF' ? 'CF' : 'Consulting'
    return httpClient
      .get(`/api/qualification_matrix?type=${type}`)
      .then((response: AxiosResponse<GetQualificationsResponse>) => {
        return response.data
      })
  }
}
