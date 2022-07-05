/* eslint-disable react-native/no-inline-styles */
import * as React from 'react'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { FlatList, Pressable, StyleSheet, View, Text } from 'react-native'
import { LeadCF } from '../module/lead/LeadCF'
import { useNavigation } from '@react-navigation/native'
import { CFTabScreenNavigationProp } from '../navigation/CFNavigator'
import { formatDate1000 } from '../misc/date'
import { Body, BodySLight, H3, H3Bold } from './text'
import { Divider } from '../component/Divider'
import { colors } from '../design'
import { currencyFormatter } from '../misc/string';

type Props = {
  leads: LeadCF[]
}

/**
 * Corporate Finance.
 */
export function LeadCFList({ leads }: Props) {
  return (
    <FlatList<LeadCF>
      data={leads}
      renderItem={renderItem}
      ItemSeparatorComponent={Divider}
      keyExtractor={(item: LeadCF) => item.id.toString()}
    />
  )
}

const renderItem = ({ item: lead }: { item: LeadCF }) => {
  return <Item lead={lead} />
}

function Item({ lead }: { lead: LeadCF }) {
  const [color,  setColor] = React.useState('')
  const [successColor, setSuccessColor] = React.useState('')
  const navigation =
    useNavigation<CFTabScreenNavigationProp<'MyLeadsCFScreen'>>()
  React.useEffect(() => {
    console.log('lead cf', lead);
    if (lead && lead.probability) {
      if (lead.probability === 100) setColor("#00568a");
      if (lead.probability === 90) setColor("#417505");
      else if (lead.probability === 70) setColor("#5cac00");
      else if (lead.probability === 50) setColor("#fc9824");
      else if (lead.probability === 10) setColor("#d0011b");
      else setColor("#7b8994");
    }
    if (lead && lead.successFees.probability) {
      if (lead.successFees.probability === 100) setSuccessColor("#00568a");
      if (lead.successFees.probability === 90) setSuccessColor("#417505");
      else if (lead.successFees.probability === 70) setSuccessColor("#5cac00");
      else if (lead.successFees.probability === 50) setSuccessColor("#fc9824");
      else if (lead.successFees.probability === 10) setSuccessColor("#d0011b");
      else setSuccessColor("#7b8994");
    }
  }, [lead])
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('EditLeadCFScreen')
      }}
    >
      <View style={styles.container}>
        <H3Bold style={styles.mainTitle}>
          {lead.name} - {lead.client}
        </H3Bold>
        <H3>{lead.description}</H3>
        <View style={styles.mainDataContainer}>
            <View style={styles.dataContainer}>
              <BodySLight>
                Start date: {formatDate1000(lead.start_date)}
              </BodySLight>
              <View style={styles.circleContainer}>
                <BodySLight>
                  Retainer: <Body>{currencyFormatter.format(lead.revenue)}</Body>
                </BodySLight>
                <View style={styles.progressCircle}>
                  <AnimatedCircularProgress
                    size={50}
                    rotation={0}
                    width={4}
                    fill={lead.probability}
                    tintColor={color}
                    backgroundColor="white">
                    {
                      () => (
                        <Text style={{ color: color, fontWeight: 'bold' }}>
                          { lead.probability }%
                        </Text>
                      )
                    }
                  </AnimatedCircularProgress>
                </View>
              </View>
            </View>

            <View style={styles.dataContainer}>
              <BodySLight>
                SF expected date: {formatDate1000(lead.end_date)}
              </BodySLight>
              <View style={styles.circleContainer}>
                <BodySLight>
                  Success Fee: <Body>{currencyFormatter.format(lead.successFees.amount)}</Body>
                </BodySLight>
                <View style={styles.progressCircle}>
                  <AnimatedCircularProgress
                    size={50}
                    rotation={0}
                    width={4}
                    fill={lead.successFees.probability}
                    tintColor={successColor}
                    backgroundColor="white">
                    {
                      () => (
                        <Text style={{ color: successColor, fontWeight: 'bold' }}>
                          { lead.successFees.probability }%
                        </Text>
                      )
                    }
                  </AnimatedCircularProgress>
                </View>
              </View>
            </View>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    fontFamily: 'OpenSansRegular',
    fontSize: 13
  },
  mainTitle: {
    width: '100%',
    height: 20,
    marginTop: 20,
    marginBottom: 20
  },
  mainDataContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 20
  },
  dataContainer: {
    width: '47%',
    marginHorizontal: 5
  },
  circleContainer:{
    marginTop: 10,
    padding: 5,
    textAlign: 'center',
    backgroundColor: colors.BGtitle
  },
  progressCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '38%',
    marginLeft: 40,
    marginTop: 10
  }
})
