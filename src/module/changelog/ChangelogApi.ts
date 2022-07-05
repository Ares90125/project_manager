import { httpClient, PaginatedResponse } from '../../api'
import { Mode } from '../mode/Mode'
import { Changelog } from './Changelog'
import { AxiosResponse } from 'axios'
import { ChangelogJson } from './ChangelogJson'

export class ChangelogApi {
  static getLogs(mode: Mode): Promise<Changelog[]> {
    const leadsType = mode === 'CF' ? 'corporate-finance' : 'consulting'
    return httpClient
      .get(`/api/logs?leads_type=${leadsType}`)
      .then((response: AxiosResponse<PaginatedResponse<ChangelogJson>>) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { meta, ...changelogs } = response.data
        const changelogsJson = Object.values<ChangelogJson>(changelogs)
        return changelogsJson.map((changelogJson) =>
          Changelog.fromJson(changelogJson)
        )
      })
  }
}
