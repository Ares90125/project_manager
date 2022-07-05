import * as React from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { CFTabScreenProps } from '../navigation/CFNavigator'
import { OrderLeadBy } from '../module/lead/OrderLeadBy'
import { ShowMonths } from '../module/lead/ShowMonths'
import { useLeadsCF } from '../module/lead/useLeadsCF'
import { isError, isLoading } from '../misc/result'
import { ProgressScreen } from '../component/Progress'
import { SelectorModal } from '../component/SelectorModal'
import { LeadCFList } from '../component/LeadCFList'
import { Row } from '../component/util/Row'
import { colors } from '../design'

const orderByOptions: { label: string; value: OrderLeadBy }[] = [
  { label: 'Date', value: 'start_date' },
  { label: 'Probability', value: 'probability' },
]

const showMonthsOptions: { label: string; value: ShowMonths }[] = [
  { label: 'All time', value: 'all' },
  { label: '1 month', value: '1' },
  { label: '3 month', value: '3' },
  { label: '6 month', value: '6' },
]

export const MyLeadsCFScreen = ({}: CFTabScreenProps<'MyLeadsCFScreen'>) => {
  const [orderBy, setOrderBy] = React.useState<OrderLeadBy>('start_date')
  const [showMonths, setShowMonths] = React.useState<ShowMonths>('all')

  const leads = useLeadsCF(orderBy, showMonths)

  if (isLoading(leads)) {
    return <ProgressScreen />
  }

  if (isError(leads)) {
    Alert.alert('Error', leads.message)
    return null
  }

  return (
    <View style={styles.container}>
      <Row style={styles.selectorRow}>
        <SelectorModal<OrderLeadBy>
          title={'Order by'}
          options={orderByOptions}
          selectedOptionValue={orderBy}
          onOptionSelected={(selectedOption) => {
            setOrderBy(selectedOption.value)
          }}
          style={styles.selectorLeft}
        />
        <SelectorModal<ShowMonths>
          title={'Show last'}
          options={showMonthsOptions}
          selectedOptionValue={showMonths}
          onOptionSelected={(selectedOption) => {
            setShowMonths(selectedOption.value)
          }}
          style={styles.selectorRight}
        />
      </Row>
      <LeadCFList leads={leads} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selectorRow: {
    backgroundColor: colors.BGtitle,
    padding: 15,
    justifyContent: 'space-evenly',
  },
  selectorLeft: {
    flex: 1
  },
  selectorRight: {
    flex: 1
  }
})
