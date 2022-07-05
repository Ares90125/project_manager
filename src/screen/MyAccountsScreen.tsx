import * as React from 'react'
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import {
  MCTabScreenNavigationProp,
  MCTabScreenProps,
} from '../navigation/MCNavigator'
import { useAccounts } from '../module/account/useAccounts'
import { useNavigation } from '@react-navigation/native'
import { isError, isLoading } from '../misc/result'
import { ProgressScreen } from '../component/Progress'
import { Account } from '../module/account/Account'
import { Divider } from '../component/Divider'
import { Row } from '../component/util/Row'
import { PressableOpacity } from '../component/util/PressableOpacity'
import { FontAwesome5 } from '@expo/vector-icons'
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export function MyAccountsScreen({}: MCTabScreenProps<'MyAccountsScreen'>) {
  const accounts = useAccounts()

  if (isLoading(accounts)) {
    return <ProgressScreen />
  }

  if (isError(accounts)) {
    Alert.alert('Error', accounts.message)
    return null
  }

  return (
    <View style={styles.container}>
      <FlatList<Account>
        data={accounts}
        renderItem={renderItem}
        ItemSeparatorComponent={Divider}
      />
    </View>
  )
}

const renderItem = ({ item: account }: { item: Account }) => {
  return <Item account={account} />
}

function Item({ account }: { account: Account }) {
  const navigation =
    useNavigation<MCTabScreenNavigationProp<'MyAccountsScreen'>>()
  return (
    <PressableOpacity
      onPress={() => {
        navigation.navigate('AccountScreen', {
          accountId: account.id,
        })
      }}
    >
      <Row style={styles.listContainer}>
        <View style={styles.listLeftColumn}>
          <Text style={styles.listName}>{account.name}</Text>
          <Text style={styles.listText}><FontAwesome5 name="bullseye" color='gray'/> Target: ${account.overview.target}</Text>
          <Text><FontAwesome5 name="check-circle" color='gray'/> Closed: ${account.overview.closed}</Text>
        </View>
        <AnimatedCircularProgress
            size={50}
            rotation={0}
            width={4}
            fill={account.overview.achievement}
            tintColor="#00e0ff"
            backgroundColor="#f2f2f2">
            {
              () => (
                <Text>
                  { account.overview.achievement }%
                </Text>
              )
            }
          </AnimatedCircularProgress>
      </Row>
    </PressableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {},
  listContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  listLeftColumn: {
    flex: 1,
  },
  listName: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 10,
    
  },
  listText:{
    marginBottom: 8,
  },
  listAchievement: {
    fontWeight: 'bold',
  },

})
