import { ChangelogJson } from './ChangelogJson'
import { formatDate } from '../../misc/date'

export class Changelog {
  id: number
  event: {
    /** '{partner} has changed the start date of {lead_name} from {previous_value} to {new_value}' */
    message: string
    format_as_money: 0 | 1 // TODO change to boolean
    collapsable: boolean
    partner: string
    previous_value: number
    new_value: number
    is_date: boolean
    /** 'STC - Special projects - Cloud gaming' */
    lead_name: string
  }
  icon: null
  timestamp: number
  alert: boolean

  constructor(
    id: number,
    event: {
      message: string
      format_as_money: 0 | 1
      collapsable: boolean
      partner: string
      previous_value: number
      new_value: number
      is_date: boolean
      lead_name: string
    },
    icon: null,
    timestamp: number,
    alert: boolean
  ) {
    this.id = id
    this.event = event
    this.icon = icon
    this.timestamp = timestamp
    this.alert = alert
  }

  static fromJson(json: ChangelogJson): Changelog {
    return new Changelog(
      json.id,
      json.event,
      json.icon,
      json.timestamp,
      json.alert
    )
  }

  timestampFormatted(): string {
    return formatDate(this.timestamp * 1000)
  }
}
