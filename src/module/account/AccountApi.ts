import { httpClient, PaginatedResponse } from '../../api'
import { AxiosResponse } from 'axios'
import { AccountMember } from './AccountMember'
import { Account } from './Account'

export class AccountApi {
  static getAccountMembers(): Promise<AccountMember[]> {
    return httpClient
      .get(`/api/accounts/members?limit=100&order_by=name`)
      .then((response: AxiosResponse<PaginatedResponse<AccountMember>>) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { meta, ...accounts } = response.data
        return Object.values<AccountMember>(accounts)
      })
  }

  static getAccounts(): Promise<Account[]> {
    return httpClient
      .get(`/api/accounts`)
      .then((response: AxiosResponse<Account[]>) => {
        // log.info('response.data.accounts', response.data[0])
        return response.data
      })
  }
}

