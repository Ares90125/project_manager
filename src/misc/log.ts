import { logger } from 'react-native-logs'
import { config } from '../config'

type LogLevels = {
  debug: number
  info: number
  request: number
  response: number
  warn: number
  error: number
}

const logLevels: LogLevels = {
  debug: 0,
  info: 1,
  request: 2,
  response: 3,
  warn: 4,
  error: 5,
}

type LogLevelColors = {
  [Property in keyof Omit<LogLevels, 'debug'>]: string
}

const logLevelColors: LogLevelColors = {
  info: 'yellowBright',
  request: 'cyanBright',
  response: 'blueBright',
  warn: 'redBright',
  error: 'red',
}

type Log = {
  [Property in keyof LogLevels]: typeof console.log
}
// We could also add '& ReturnType<typeof logger.createLogger>' to Log to "see"
// the other logger methods (extend, enable, disable...), but this means that
// any method can be called on log, so we don't get any error if we do a mistake
// like eg. log.whatever() :/

// https://github.com/onubo/react-native-logs
export const log: Log = logger.createLogger({
  enabled: config.enableDebugFeatures,
  levels: logLevels,
  transportOptions: {
    colors: logLevelColors,
  },
  async: true,
}) as any as Log

// https://stackoverflow.com/questions/26540706/preserving-undefined-that-json-stringify-otherwise-removes
/**
 * Prints the object to the console, but preserving undefined values.
 * @see prettyPrintOmit
 */
export function prettyPrint(object: any): string {
  return JSON.stringify(
    object,
    (k, v) => (v === undefined ? '__undefined' : v),
    2
  ).replace(/"__undefined"/g, 'undefined')
}

/**
 * Returns a copy of the object with the given properties omitted.
 * Use it to reduce the clutter in logs.
 */
export function omitProps(object: any, properties: string[]): any {
  const copy = { ...object }
  for (const key of properties) {
    copy[key] = '(omitted)'
  }
  return copy
}

/**
 * Like `prettyPrint`, but it omits the given properties from the object.
 * @see prettyPrint
 */
export function prettyPrintOmit(object: any, properties: string[]): string {
  const objectOmit = omitProps(object, properties)
  return prettyPrint(objectOmit)
}
