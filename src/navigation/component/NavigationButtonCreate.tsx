import * as React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Row } from '../../component/util/Row'
import { FontAwesome5 } from '@expo/vector-icons'
import { PressableOpacity } from '../../component/util/PressableOpacity'

type Props = {
  onPress: () => void
}

export function NavigationButtonCreate({ onPress }: Props) {
  return (
    <PressableOpacity style={styles.createButtonPressable} onPress={onPress}>
        <FontAwesome5 name="bars"  style={styles.createButtonRow} />
    </PressableOpacity>
  )
}

const styles = StyleSheet.create({
  createButtonPressable: {
    marginRight: 10,
  },
  createButtonRow: {
    color:'white',
    fontSize:'22px',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15
  },
  createText:{
    marginBottom: 3
  }
})
