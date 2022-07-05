import * as React from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { MCTabScreenProps } from '../navigation/MCNavigator'
import { OrderLeadBy } from '../module/lead/OrderLeadBy'
import { ShowMonths } from '../module/lead/ShowMonths'
import { useLeadsMC } from '../module/lead/useLeadsMC'
import { isError, isLoading } from '../misc/result'
import { ProgressScreen } from '../component/Progress'
import { SelectorModal, SelectorModalOption } from '../component/SelectorModal'
import { LeadMCList } from '../component/LeadMCList'
import { Row } from '../component/util/Row'
import { colors } from '../design'

const orderByOptions: SelectorModalOption<OrderLeadBy>[] = [
  { label: 'Date', value: 'start_date' },
  { label: 'Probability', value: 'probability' },
]

const showMonthsOptions: SelectorModalOption<ShowMonths>[] = [
  { label: 'All time', value: 'all' },
  { label: '1 month', value: '1' },
  { label: '3 month', value: '3' },
  { label: '6 month', value: '6' },
]

export const MyLeadsMCScreen = ({}: MCTabScreenProps<'MyLeadsMCScreen'>) => {
  const [orderBy, setOrderBy] = React.useState<OrderLeadBy>('start_date')
  const [showMonths, setShowMonths] = React.useState<ShowMonths>('all')

  const leads = useLeadsMC(orderBy, showMonths)

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
      <LeadMCList leads={leads} />
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
