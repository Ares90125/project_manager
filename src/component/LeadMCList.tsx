import * as React from 'react'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { LeadMC } from '../module/lead/LeadMC'
import { useNavigation } from '@react-navigation/native'
import { MCTabScreenNavigationProp } from '../navigation/MCNavigator'
import { formatDate1000 } from '../misc/date'
import { Body, BodyLight, H3Bold, H4Bold} from './text'
import { colors } from '../design'
import { Divider } from '../component/Divider'
import { AntDesign } from '@expo/vector-icons';
import { currencyFormatter } from '../misc/string';


type Props = {
  leads: LeadMC[]
}

/**
 * Management Consulting.
 */
export function LeadMCList({ leads }: Props) {
  return (
    <FlatList<LeadMC>
      data={leads}
      renderItem={renderItem}
      ItemSeparatorComponent={Divider}
      keyExtractor={(item: LeadMC) => item.id.toString()}
    />
  )
}

const renderItem = ({ item: lead }: { item: LeadMC }) => {
  return <Item lead={lead} />
}

function Item({ lead }: { lead: LeadMC }) {
  const [color,  setColor] = React.useState('')

  React.useEffect(() => {
    if (lead && lead.probability) {
      if (lead.probability === 100) setColor("#00568a");
      if (lead.probability === 90) setColor("#417505");
      else if (lead.probability === 70) setColor("#5cac00");
      else if (lead.probability === 50) setColor("#fc9824");
      else if (lead.probability === 10) setColor("#d0011b");
      else setColor("#7b8994");
    }
  }, [lead])
  const navigation =
    useNavigation<MCTabScreenNavigationProp<'MyLeadsMCScreen'>>()

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('EditLeadMCScreen', {
          item: lead,
        })
      }}
    >
      <View style={styles.container}>
        <View style={styles.titleIconContainer}>
          <View style={styles.TitleContainer}>
            <H3Bold>
              {lead.account} {lead.subAccount ? '- ' + lead.subAccount : ''}
            </H3Bold>
            <H3Bold>{lead.name}</H3Bold>
          </View>
          <AntDesign
            name="right"
            size={18}
            color="gray"
            style={styles.rightIcon}
          />
        </View>

        <View style={styles.leadsDataContainer}>
          <View style={styles.leadsData}>
            <BodyLight style={styles.startDateText}>
              Start date: <Body>{formatDate1000(lead.start_date)}</Body>
            </BodyLight>
            <BodyLight>
              Revenue: <Body>{currencyFormatter.format(lead.actual_revenue)}</Body>
            </BodyLight>
          </View>

          <View style={styles.daysInPipe}>
            <H4Bold>{lead.days_in_pipe} days</H4Bold>
            <H4Bold>in pipe</H4Bold>
          </View>

          <View style={styles.progressCircle}>
            <AnimatedCircularProgress
              size={50}
              rotation={0}
              width={4}
              fill={lead.probability}
              tintColor={color}
              backgroundColor="#f2f2f2">
              {
                () => (
                  <Text style={{color: color}}>
                    { lead.probability }%
                  </Text>
                )
              }
            </AnimatedCircularProgress>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%'
  },
  startDateText: {
    marginTop: 6,
    marginBottom: 2
  },
  progressCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '38%'
  },
  daysInPipe: {
    width: 'auto',
    height: 40,
    paddingHorizontal: 5,
    backgroundColor: '#b77a82',
    borderRadius: 5,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  leadsData: {
    width: '40%',
    marginRight: 40,
  },
  leadsDataContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  titleIconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%'
  },
  TitleContainer:{
    width: '90%',
    marginRight: 10
  },
  rightIcon:{
    width: '10%'
  }
})
