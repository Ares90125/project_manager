import * as React from 'react'
import { Text, TextStyle } from 'react-native'

interface Props {
  text: string
  regularTextStyle: TextStyle
  delimitedTextStyle: TextStyle
}

const DELIMITER_START = '{'
const DELIMITER_END = '}'

/**
 * Given a text that contains chunks of text wrapped within the delimiters '{'
 * and '}', it returns a <Text /> component that applies a different text style
 * to the text within the delimiters.
 */
export function TwoStyleText({
  text,
  regularTextStyle,
  delimitedTextStyle,
}: Props) {
  const allTextSplit = text.split(DELIMITER_START)
  const textComponents = allTextSplit.map((t, position) => {
    if (t.includes(DELIMITER_END)) {
      const splitText = t.split(DELIMITER_END)
      const delimitedText = splitText[0]
      const regularText = splitText[1]
      return (
        <React.Fragment key={position}>
          <Text style={delimitedTextStyle}>{delimitedText}</Text>
          <Text style={regularTextStyle}>{regularText}</Text>
        </React.Fragment>
      )
    } else {
      return (
        <Text style={regularTextStyle} key={position}>
          {t}
        </Text>
      )
    }
  })
  return <Text>{textComponents}</Text>
}
