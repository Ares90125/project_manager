import * as React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { colors } from '../design'
import { isAndroid } from '../misc/platform'

export function Progress() {
  return (
    <ActivityIndicator
      color={colors.grocCorp}
      size={isAndroid ? 35 : 'large'}
    />
  )
}

export function ProgressScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        color={colors.grocCorp}
        size={isAndroid ? 35 : 'large'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
