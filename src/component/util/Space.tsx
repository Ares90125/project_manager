import * as React from 'react'
import { View } from 'react-native'

/** Vertical space */
export function Space({ height }: { height: number }) {
  return <View style={{ height }} />
}
