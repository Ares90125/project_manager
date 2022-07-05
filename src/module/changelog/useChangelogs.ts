import * as React from 'react'
import { Mode } from '../mode/Mode'
import { Changelog } from './Changelog'
import { ChangelogApi } from './ChangelogApi'
import { extractApiErrorMessage } from '../../api'
import { log } from '../../misc/log'

export function useChangelogs(mode: Mode) {
  const [result, setResult] = React.useState<'loading' | Changelog[] | Error>(
    'loading'
  )

  React.useEffect(() => {
    setResult('loading')
    ChangelogApi.getLogs(mode)
      .then((logs) => {
        setResult(logs)
      })
      .catch((error) => {
        const errorMessage = extractApiErrorMessage(error)
        log.error(`ChangelogApi.getLogs error`, errorMessage)
        setResult(Error(errorMessage))
      })
  }, [mode])

  return result
}
