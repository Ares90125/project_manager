import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Changelog } from '../module/changelog/Changelog'
import { TwoStyleText } from './TwoStyleText'
import { formatDate1000 } from '../misc/date'


type Props = {
  changelog: Changelog
}


export function ChangelogMessage({ changelog }: Props) {
  console.log(changelog.event)
  const message = changelog.event.message
    .replace('{partner}', changelog.event.partner)
    .replace('{lead_name}', '{' + changelog.event.lead_name + '}')
    .replace('{previous_value}', '{' + formatDate1000(changelog.event.previous_value) + '}')
    .replace('{new_value}', '{' + formatDate1000(changelog.event.new_value) + '}')
  return (
    <TwoStyleText
      text={message}
      regularTextStyle={styles.regularTextStyle}
      delimitedTextStyle={styles.highlightedTextStyle}
    />
  )
}

const styles = StyleSheet.create({
  regularTextStyle: {},
  highlightedTextStyle: {
    fontWeight: 'bold',
  },
})
