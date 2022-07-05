import * as React from 'react'
import { Alert, FlatList, Linking, StyleSheet, Text, View } from 'react-native'
import { MCStackScreenProps } from '../navigation/MCNavigator'
import { useAccountMembers } from '../module/account/useAccountMembers'
import { isError, isLoading } from '../misc/result'
import { ProgressScreen } from '../component/Progress'
import { AccountMember } from '../module/account/AccountMember'
import { log } from '../misc/log'
import { Row } from '../component/util/Row'
import { FontAwesome5 } from '@expo/vector-icons'
import { Divider } from '../component/Divider'

export function AccountMembersScreen({}: MCStackScreenProps<'AccountMembersScreen'>) {
  const accountMembers = useAccountMembers()

  log.debug(`AccountMembersScreen`, accountMembers)

  if (isLoading(accountMembers)) {
    return <ProgressScreen />
  }

  if (isError(accountMembers)) {
    Alert.alert('Error', accountMembers.message)
    return null
  }

  return (
    <View style={styles.container}>
      <FlatList<AccountMember>
        data={accountMembers}
        renderItem={renderItem}
        ItemSeparatorComponent={Divider}
      />
    </View>
  )
}

const renderItem = ({ item: accountMember }: { item: AccountMember }) => {
  return (
    <Row style={styles.listContainer}>
      <Text style={styles.listName}>{accountMember.name}</Text>
      <FontAwesome5
        name={'phone'}
        size={18}
        style={styles.listIcon}
        onPress={async () => {
          const url = `tel:${accountMember.phone}`
          openUrl(url)
        }}
      />
      <FontAwesome5
        name={'envelope'}
        size={18}
        style={styles.listIcon}
        onPress={async () => {
          const url = `mailto:${accountMember.email}`
          openUrl(url)
        }}
      />
    </Row>
  )
}

const openUrl = async (url: string) => {
  log.debug('Open url', url)
  if (await Linking.canOpenURL(url)) {
    Linking.openURL(url)
  } else {
    Alert.alert('Error', `Can't open ${url}`)
  }
}

const styles = StyleSheet.create({
  container: {},
  listContainer: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  listName: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
  },
  listIcon: {
    paddingHorizontal: 10,
    paddingVertical: 18,
    color: 'gray'
  },
})
