import * as React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

interface Props {
  defaultValue: number
  onChange: Function
  values: number[]
}

interface PropertyProps {
  color: string
  text: string
  value: number
}

const PERCENTAGE_PROPERTY : Array<PropertyProps> = [
  {
    value: 0,
    color: '#00568a',
    text: 'Project lost',
  },
  {
    value: 10,
    color: '#d0011b',
    text: 'Inital lead',
  },
  {
    value: 50,
    color: '#fc9824',
    text: 'Proposal submitted',
  },
  {
    value: 70,
    color: '#5cac00',
    text: 'Positive outlook',
  },
  {
    value: 90,
    color: '#417505',
    text: 'Verbally confirmed',
  },
  {
    value: 100,
    color: '#00568a',
    text: 'Project sold',
  }
]

export function ProbabilityBar({ values, defaultValue, onChange }: Props) {
  const [value, setValue] = React.useState<number>(defaultValue)

  const onUpdateValue = (updatedValue: number) => {
    setValue(updatedValue)
    onChange(updatedValue)
  }

  const getPropertyColor = (number: number) : string => {
    for (let i = 0; i < PERCENTAGE_PROPERTY.length; i++) {
      if (PERCENTAGE_PROPERTY[i].value === number) {
        return PERCENTAGE_PROPERTY[i].color;
      }
    }
    return PERCENTAGE_PROPERTY[0].color;
  }

  const getPropertyText = (number: number) : string => {
    for (let i = 0; i < PERCENTAGE_PROPERTY.length; i++) {
      if (PERCENTAGE_PROPERTY[i].value === number) {
        return PERCENTAGE_PROPERTY[i].text;
      }
    }
    return PERCENTAGE_PROPERTY[0].text;
  }

  return (
    <View style={styles.container}>
      {values.map((number) => {
        if (number === value) {
          return (
            <TouchableOpacity
              onPress={() => onUpdateValue(number)}
              key={number}
              style={[styles.selectedBigDot, { left: `${number}%` }]}
            >
              <View style={styles.selectedOne}>
                <View style={[styles.percentageText, { color: getPropertyColor(number) }]}>{number}%</View>
                <View style={styles.bigDotContainer}>
                  <View style={styles.bigDot} />
                </View>
                <View style={styles.description}>{getPropertyText(number)}</View>
              </View>
            </TouchableOpacity>
          )
        }

        return (
          <TouchableOpacity
            onPress={() => setValue(number)}
            key={number}
            style={[
              styles.selectedDot,
              { left: `${number}%` },
              number > value && { backgroundColor: '#f2f2f2' },
            ]}
          />
        )
      })}
      <View style={[styles.greyLineContainer, { width: `${value}%` }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: `80%`,
    borderColor: '#f2f2f2',
    borderBottomWidth: 5,
    alignSelf: 'center',
    height: 30,
    paddingRight: 10,
    marginBottom: 40,
  },
  selectedDot: {
    height: 15,
    width: 15,
    backgroundColor: 'grey',
    borderRadius: 25,
    position: 'absolute',
    bottom: -10,
  },
  selectedOne: {
    position: 'absolute',
    top: '-48px',
    alignItems: 'flex-start',
  },
  description: {
    top: 10,
    textAlign: 'center',
    marginLeft: '-35%',
    fontSize: 12,
    color: '#7b8994',
  },
  percentageText: {
    top: -10,
    left: 3,
    fontSize: 14,
    textAlign: 'center',
  },
  bigDotContainer: {
    height: 30,
    width: 30,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  bigDot: {
    height: 20,
    width: 20,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  selectedBigDot: {
    position: 'absolute',
    bottom: -17,
  },
  greyLineContainer: {
    position: 'absolute',
    borderColor: 'grey',
    borderBottomWidth: 5,
    height: 30,
    zIndex: -1,
  },
})
