/**
 * Corporate Finance.
 */
export type LeadCF = {
  id: number
  origination_id: 'proactive'
  lead_id: number
  name: string
  leads_cf_category_id: number
  category_name: string
  partner: string
  project_code: string
  probability: number
  start_date: number
  is_in_pipe: boolean
  days_in_pipe: number
  revenue: number
  weeks: number
  client: string
  subtype: string
  description: string
  qualification_matrix_value: number
  number_of_competing_firms: string
  created_at: number
  updated_at: number
  end_date: number
  partner_id: number
  phases?: Array<Phase>
  lostLeadReason?: Array<string>
  overWrittenRevenues?: OverWrittenRevenues
  overwritten_revenue?: boolean
  qualificationMatrix?: Array<QualiticationMatrix>
  theoreticalRevenues?: {
    amount: number
    expenses_percentage: number
    fte_fees: number
  }
  successFees: {
    amount: number
    probability: number
    expected_date: number
  }
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