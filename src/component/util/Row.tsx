import * as React from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import { WithChildren } from './WithChildren'

export function Row(props: WithChildren<ViewProps>) {
  return (
    <View {...props} style={[styles.row, props.style]}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
})
