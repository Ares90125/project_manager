import * as React from 'react'

/**
 * Instead of doing eg `MyText(props: TextProps & {children: React.ReactNode})`
 * you can do `MyText(props: WithChildren<TextProps>)`.
 * Note that the `children` prop is required.
 */
export type WithChildren<T> = T & { children: React.ReactNode }
