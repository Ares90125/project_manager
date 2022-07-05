import * as React from 'react'
import { LeadApi } from './LeadApi'
import { extractApiErrorMessage } from '../../api'
import { log } from '../../misc/log'

export type QualificationMatrixType = {
  id: number
  name: string
  qualitative: number
  questions: Array<QualificationQuestion>
}

export type QualificationQuestion = {
  id: number
  title: string
  weight: number
  answers: Array<QualificationAnswer>
  created_at: number
  updated_at: number
}

export type QualificationAnswer = {
  id: number
  text: string
  weight: number
  created_at: number
  updated_at: number
}

export function useQualificationMatrix(
  type: string
): 'loading' | QualificationMatrixType | Error {
  const [result, setResult] = React.useState<'loading' | QualificationMatrixType | Error>(
    'loading'
  )

  React.useEffect(() => {
    setResult('loading')
    LeadApi.getQualificationMatrix(type)
      .then((matrix) => {
        setResult(matrix)
      })
      .catch((error) => {
        const errorMessage = extractApiErrorMessage(error)
        log.error(`LeadApi.getQualificationMatrix error`, errorMessage)
        setResult(Error(errorMessage))
      })
  }, [type])

  return result
}
