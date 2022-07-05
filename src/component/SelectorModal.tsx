import * as React from 'react'
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native'
import { BoldText } from './util/BoldText'
import { PressableOpacity } from './util/PressableOpacity'
import { colors } from '../design'

export type SelectorModalOption<T extends string> = {
  label: string
  value: T
}

type Props<T extends string> = {
  title: string
  options: SelectorModalOption<T>[]
  selectedOptionValue: SelectorModalOption<T>['value']
  onOptionSelected: (selectedOption: SelectorModalOption<T>) => void
  style?: ViewStyle
}

export function SelectorModal<T extends string>({
  title,
  options,
  selectedOptionValue,
  onOptionSelected,
  style,
}: Props<T>) {
  const [showModal, setShowModal] = React.useState(false)

  const selectedOptionLabel =
    options.find((option) => option.value === selectedOptionValue)?.label ?? ''

  return (
    <>
      <PressableOpacity
        onPress={() => {
          setShowModal((current) => !current)
        }}
        style={style}
      >
        <View style={styles.selector}>
          <Text>
            {title}: <BoldText>{selectedOptionLabel}</BoldText>
          </Text>
        </View>
      </PressableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(false)
        }}
      >
        <Pressable
          onPress={() => {
            setShowModal(false)
          }}
          style={styles.modalOuter}
        >
          <View style={styles.modalInner}>
            <Text style={styles.modalTitle}>{title}</Text>
            {options.map((option) => (
              <PressableOpacity
                key={option.value}
                onPress={() => {
                  onOptionSelected(option)
                  setShowModal(false)
                }}
              >
                <View
                  style={[
                    styles.listItem,
                    option.value === selectedOptionValue &&
                      styles.listItemSelected,
                  ]}
                >
                  <Text>{option.label}</Text>
                </View>
              </PressableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  selector: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  modalOuter: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modalInner: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 40,
    borderRadius: 6,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  listItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
    textAlign: 'center'
  },
  listItemSelected: {
    backgroundColor: colors.grocCorp
  },
})
