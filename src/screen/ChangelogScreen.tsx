import * as React from 'react'
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import { observer } from 'mobx-react-lite'
import { MCTabScreenProps } from '../navigation/MCNavigator'
import { modeStore } from '../module/mode/ModeStore'
import { Changelog } from '../module/changelog/Changelog'
import { ChangelogApi } from '../module/changelog/ChangelogApi'
import { useFocusEffect } from '@react-navigation/native'
import { isError, isLoading } from '../misc/result'
import { ProgressScreen } from '../component/Progress'
import { extractApiErrorMessage } from '../api'
import { log } from '../misc/log'
import { ChangelogMessage } from '../component/ChangelogMessage'
import { colors } from '../design'
import { FontAwesome5 } from '@expo/vector-icons'
import { Divider } from '../component/Divider'
import { Foundation } from '@expo/vector-icons'
import { formatDate1000 } from '../misc/date'

export const ChangelogScreen = observer(
  ({}: MCTabScreenProps<'ChangelogScreen'>) => {
    const mode = modeStore.mode

    const [changelogs, setChangelogs] = React.useState<
      'loading' | Changelog[] | Error
    >('loading')

    const getChangelogs = React.useCallback(() => {
      ChangelogApi.getLogs(mode)
        .then((logs) => {
          setChangelogs(logs)
        })
        .catch((error) => {
          const errorMessage = extractApiErrorMessage(error)
          log.error(`ChangelogApi.getLogs error`, errorMessage)
          setChangelogs(Error(errorMessage))
        })
    }, [mode])

    useFocusEffect(
      React.useCallback(() => {
        getChangelogs()
        return () => {}
      }, [getChangelogs])
    )

    if (isLoading(changelogs)) {
      return <ProgressScreen />
    }

    if (isError(changelogs)) {
      Alert.alert('Error', changelogs.message)
      return null
    }

    console.log(changelogs)

    return (
      <View style={styles.container}>
        <FlatList<Changelog>
          data={changelogs}
          ItemSeparatorComponent={Divider}
          renderItem={renderItem}
        />
      </View>
    )
  }
)

// app/log/log.html
const renderItem = ({ item: changelog }: { item: Changelog }) => {
  return (
    <View style={styles.itemContainer}>
      <View>
        <Foundation
          name="pencil"
          size={22}
          color="gray"
          style={styles.pencilIcon}
        />
      </View>
      <View style={styles.dataContainer}>
        <ChangelogMessage changelog={changelog} />
        <View style={styles.dateContainer}>
          <FontAwesome5 name="calendar-day" color="gray" />
          <Text style={styles.itemDate}>
            {' '}
            {formatDate1000(changelog.timestamp)}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  itemDate: {
    color: colors.grisDelta,
  },
  dataContainer: {
    width: '80%',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10,
  },
  dateContainer: {
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pencilIcon: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    marginTop: 10,
    borderRadius: 100,
    backgroundColor: colors.BGtitle,
    borderColor: colors.grocCorp,
    borderWidth: 1,
    paddingLeft: 12,
    paddingRight: 28,
    paddingTop: 7,
    paddingBottom: 10,
  },
})
