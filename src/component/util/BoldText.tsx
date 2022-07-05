import * as React from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'
import { WithChildren } from './WithChildren'

export function BoldText(props: WithChildren<TextProps>) {
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {props.children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  },
})
