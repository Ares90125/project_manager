export type ChangelogJson = {
  id: number
  event: {
    /** '{partner} has changed the start date of {lead_name} from {previous_value} to {new_value}' */
    message: string
    format_as_money: 0 | 1
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
}
