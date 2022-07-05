import * as React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Row } from '../../component/util/Row'
import { FontAwesome5 } from '@expo/vector-icons'
import { PressableOpacity } from '../../component/util/PressableOpacity'

type Props = {
  onPress: () => void
}

export function HeaderButtonCreate({ onPress }: Props) {
  return (
    <PressableOpacity style={styles.createButtonPressable} onPress={onPress}>
      <Row style={styles.createButtonRow}>
        <FontAwesome5 name="plus" />
        <Text style={styles.createText}> Create</Text>
      </Row>
    </PressableOpacity>
  )
}

const styles = StyleSheet.create({
  createButtonPressable: {
    marginRight: 10,
  },
  createButtonRow: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15
  },
  createText:{
    marginBottom: 3
  }
})
