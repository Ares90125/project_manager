import * as React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { MCTabScreenProps } from '../navigation/MCNavigator'
import { observer } from 'mobx-react-lite'
import { userStore } from '../module/user/UserStore'
import { modeStore } from '../module/mode/ModeStore'
import { colors } from '../design'
import { Row } from '../component/util/Row'
import { FontAwesome5 } from '@expo/vector-icons'
import { PressableOpacity } from '../component/util/PressableOpacity'
import { Space } from '../component/util/Space'

export const SettingsScreen = observer(
  ({ navigation }: MCTabScreenProps<'SettingsScreen'>) => {
    const modeEditable = userStore.user?.mc && userStore.user?.cf
    const modeColor = modeEditable ? colors.darkTwo : colors.grisDelta

    return (
      <View style={styles.container}>
        <View style={styles.modeContainer}>
          <PressableOpacity
            onPress={() => {
              modeStore.setMode('MC')
            }}
            disabled={!modeEditable}
            style={styles.modePressable}
          >
            <Row style={styles.modeRow}>
              <FontAwesome5
                name={modeStore.mode === 'MC' ? 'check-circle' : 'circle'}
                size={25}
                color={modeColor}
              />
              <Text style={[styles.modeText, { color: modeColor }]}>
                Pipe MC
              </Text>
            </Row>
          </PressableOpacity>
          <PressableOpacity
            onPress={() => {
              modeStore.setMode('CF')
            }}
            disabled={!modeEditable}
            style={styles.modePressable}
          >
            <Row style={styles.modeRow}>
              <FontAwesome5
                name={modeStore.mode === 'CF' ? 'check-circle' : 'circle'}
                size={25}
                color={modeColor}
              />
              <Text style={[styles.modeText, { color: modeColor }]}>
                Pipe CF
              </Text>
            </Row>
          </PressableOpacity>
        </View>

        <Button
          title={'Account Members'}
          onPress={() => {
            navigation.navigate('AccountMembersScreen')
          }}
        />
        <Space height={12} />
        <Button
          title={'Logout'}
          onPress={() => {
            userStore.logout()
          }}
        />
      </View>
    )
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modeContainer: {
    alignSelf: 'center',
    marginBottom: 30,
  },
  modePressable: {
    paddingHorizontal: 13,
  },
  modeRow: {
    paddingVertical: 10,
  },
  modeText: {
    fontSize: 20,
    marginLeft: 20,
  },
  buttonAccount: {
    marginBottom: 10,
  },
})
