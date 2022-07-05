export function isLoading<T>(arg: 'loading' | Error | T): arg is 'loading' {
  return arg === 'loading'
}

export function isSuccess<T>(arg: 'loading' | Error | T): arg is T {
  return arg !== 'loading' && !(arg instanceof Error)
}

export function isError<T>(arg: 'loading' | Error | T): arg is Error {
  return arg instanceof Error
}
