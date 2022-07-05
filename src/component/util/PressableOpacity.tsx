import * as React from 'react'
import { Pressable, PressableProps, ViewStyle } from 'react-native'
import { WithChildren } from './WithChildren'

/**
 * Like the default `Pressable` but its color lightens when pressed, like
 * `TouchableOpacity`.
 */
export function PressableOpacity(props: WithChildren<PressableProps>) {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => ({
        ...(props.style as ViewStyle),
        opacity: pressed ? 0.4 : 1,
      })}
    >
      {props.children}
    </Pressable>
  )
}
