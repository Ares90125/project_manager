/**
 * Management Consulting.
 */
export type LeadMC = {
  id: number
  origination_id: string
  lead_id: number
  name: string
  location: string
  leads_consulting_location_id: number
  location_city: string
  partner: string
  project_code: string
  account: string
  account_id: number
  subAccount: string
  subaccount_id: number
  probability: number
  qualitative_comment: string
  start_date: number
  is_in_pipe: true
  days_in_pipe: number
  overwritten_revenue: true
  monthly_overwritten_revenues: false
  can_modify_overwritten_revenue: true
  actual_revenue: number
  phases?: Array<Phase>
  lostLeadReason?: Array<string>
  overWrittenRevenues?: OverWrittenRevenues
  qualificationMatrix?: Array<QualiticationMatrix>
  theoreticalRevenues?: {
    amount: number
    expenses_percentage: number
    fte_fees: number
  }
  discount: {
    amount: number
    percentage: number
  }
  qualification_matrix_value: number
  number_of_competing_firms: string
  created_at: number
  updated_at: number
  partner_id: number
  successFees: Array<{
    amount: number
    probability: number
    expected_date: number
  }>
}

export type Phase = {
  weeks: number
  fte: number
}

export type OverWrittenRevenues = {
  amount: number
  overwritten_total_expenses: number
  overwritten_total_fees: number
}

export type QualiticationMatrix = {
  answer_id: number
  question_id: number
}