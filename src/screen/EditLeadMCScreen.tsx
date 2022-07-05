import * as React from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native'
import {
  BodyLight,
  H2Bold,
  H2BoldWhite,
  BodyLightWhite,
  H3BoldGray,
} from '../component/text'
import { MCStackScreenProps } from '../navigation/MCNavigator'
import { Picker } from '@react-native-picker/picker'
import Checkbox from 'expo-checkbox'
import { colors } from '../design'
import { LeadMC, Phase } from '../module/lead/LeadMC'
import { COMPETING_FIRMS } from '../misc/constants'
import { formatDate1000 } from '../misc/date'
import { useLeadMCById } from '../module/lead/useLeadMCById'
import { currencyFormatter } from '../misc/string'
import { ProgressScreen } from '../component/Progress'
import { isLoading, isError } from '../misc/result'
import { ProbabilityBar } from '../component/ProbabilityBar'
// import { useQualificationMatrix } from '../module/lead/useQualificationMatrix'

export function EditLeadMCScreen({
  route,
}: MCStackScreenProps<'EditLeadMCScreen'>) {
  const currentLead = useLeadMCById((route.params.item as LeadMC).id)
  // const qualificationMatrix = useQualificationMatrix('Consulting');

  const [updatedLead, setUpdatedLead] = React.useState<LeadMC>(route.params.item as LeadMC);
  console.log('my item', currentLead);

  React.useEffect(() => {
    // @ts-ignore
    if (currentLead !== "loading" && currentLead.id) {
      setUpdatedLead(currentLead as LeadMC);
    }
  }, [currentLead]);

  const updateKeyVaue = (key: string, value: any) => {
    // @ts-ignore
    if (updatedLead[key] !== value) {
      setUpdatedLead({ ...updatedLead, [key]: value });
    }
  }

  const onChangePhaseWeeks = (value: any, index: number) => {
    const phases = updatedLead.phases;
    if (phases) {
      phases[index].weeks = value;
      setUpdatedLead({ ...updatedLead, phases });
    }
  }

  const onChangePhaseEconomics = (value: any, index: number) => {
    const phases = updatedLead.phases;
    if (phases) {
      phases[index].fte = value;
      setUpdatedLead({ ...updatedLead, phases });
    }
  }

  const addNewPhase = () => {
    const phases = updatedLead.phases;
    if (phases) {
      phases.push({ weeks: 0, fte: 0 });
      setUpdatedLead({ ...updatedLead, phases });
    }
  }

  const Divider = () => <View style={styles.divider} />

  if (isLoading(currentLead)) {
    return <ProgressScreen />
  }

  if (isError(currentLead)) {
    Alert.alert('Error', currentLead.message)
    return null
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <H2Bold>{updatedLead.account} - {updatedLead.subAccount}</H2Bold>
          <H2Bold>{updatedLead.name}</H2Bold>
          <View style={styles.subTitle}>
            <BodyLight style={styles.partner}>Partner: {updatedLead.partner}</BodyLight>
            <BodyLight>{updatedLead.days_in_pipe} days</BodyLight>
          </View>
        </View>
        <View style={styles.selectorPickers}>
          <Picker
            style={styles.picker}
            selectedValue={updatedLead.origination_id}
            onValueChange={(itemValue) => updateKeyVaue('origination_id', itemValue)}
          >
            <Picker.Item label="Proactive" value="proactive" />
            <Picker.Item label="Reactive" value="reactive" />
          </Picker>
          <Picker
            style={styles.picker2}
            selectedValue={updatedLead.number_of_competing_firms}
            onValueChange={(itemValue) => updateKeyVaue('number_of_competing_firms', itemValue)}
          >
            { COMPETING_FIRMS.map((info) => (
              <Picker.Item label={info.label} value={info.value} key={info.value} />
            ))}
          </Picker>
        </View>
        <Text style={styles.secondaryTitles}>START DATE</Text>
        <View style={styles.date}>
          <BodyLight>{formatDate1000(updatedLead.start_date)}</BodyLight>
        </View>
        <Text style={styles.secondaryTitles}>RETAINER PROBABILITY</Text>
        <View style={styles.date}>
          <ProbabilityBar
            defaultValue={updatedLead.probability}
            values={[0, 10, 50, 70, 90, 100]}
            onChange={(value: any) => updateKeyVaue('probability', value)}
          />
        </View>
        <Text style={styles.secondaryTitles}>ECONOMICS</Text>
        { updatedLead.phases?.map((phase: Phase, index: number) => (
          <View style={styles.economicsData}>
            <H3BoldGray>Phase {index}</H3BoldGray>
            <BodyLight style={styles.economicsTitle}>Weeks:</BodyLight>
            <TextInput
              style={styles.textInputEconomics}
              value={phase.weeks.toString()}
              keyboardType="numeric"
              onChangeText={(value) => onChangePhaseWeeks(value, index)}
            />
            <BodyLight style={styles.economicsTitle}>FTEs:</BodyLight>
            <TextInput
              style={styles.textInputEconomics}
              value={phase.fte.toString()}
              keyboardType="numeric"
              onChangeText={(value) => onChangePhaseEconomics(value, index)}
            />
          </View>
        ))}
        <TouchableOpacity>
          <Text style={styles.buttonAdd} onPress={() => addNewPhase()}>+ ADD PHASE</Text>
        </TouchableOpacity>
        <View style={styles.totalTheoreticalContainer}>
          <View style={styles.totalTopTitle}>
            <BodyLightWhite style={styles.totalExpenses}>
              Expenses: {updatedLead?.theoreticalRevenues?.expenses_percentage}%
            </BodyLightWhite>
            <BodyLightWhite>Fees/FTE: {updatedLead.theoreticalRevenues?.fte_fees}</BodyLightWhite>
          </View>
          <H2BoldWhite style={styles.totalTheoreticalTitle}>
            Total Theoretical
          </H2BoldWhite>
          <View style={styles.totalRevenueContainer}>
            <H2BoldWhite style={styles.totalRevenue}>Revenue</H2BoldWhite>
            <H2BoldWhite>{currencyFormatter.format(updatedLead.theoreticalRevenues?.amount!)}</H2BoldWhite>
          </View>
        </View>
        <View style={styles.checkContainer}>
          <Checkbox
            style={styles.checkbox}
            value={updatedLead.overwritten_revenue}
            onValueChange={(value) => updateKeyVaue('overwritten_revenue', value)}
            color={updatedLead.overwritten_revenue ? '#23203f' : '#f2f2f2'}
          />
          <Text>Overwrite Revenue Amount</Text>
        </View>
        <View style={styles.checkContainer}>
          <Checkbox
            style={styles.checkbox}
            value={updatedLead.overwritten_revenue}
            onValueChange={(value) => updateKeyVaue('overwritten_revenue', value)}
            color={updatedLead.overwritten_revenue ? '#23203f' : '#f2f2f2'}
          />
          <Text>Success Fee</Text>
          <TextInput style={styles.textInput} value={updatedLead.successFees?.length > 0 ? updatedLead.successFees[0].amount.toString() : '0'} />
        </View>
        <View style={styles.textAreaContainer}>
          <Text style={styles.textAreaTitle}>Latest qualitative comment</Text>
          <TextInput
            multiline={true}
            numberOfLines={10}
            value={updatedLead.qualitative_comment}
            onChange={(value) => updateKeyVaue('qualitative_comment', value)}
            style={styles.textArea}
          />
        </View>
        {/* { (qualificationMatrix && qualificationMatrix !== 'loading') &&
          <>
            <Text style={styles.secondaryTitles}>
              QUALIFICATION MATRIX
            </Text>
            <View style={styles.formsContainer}>
              <H3BoldGray style={styles.formsTitle}>
                Strategic Considerations
              </H3BoldGray>
              <Text style={styles.formsSubTitle}>
                Alignment to Key Account Strategy (Tier 1, Tier 2, Others)
              </Text>
              <Picker
                  style={styles.pickerStrategic}
                  selectedValue={selectedLanguage}
                  onValueChange={(itemValue) =>
                  setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Strategic and Priority Accounts" value="Strategic and Priority Accounts" />
                <Picker.Item label="Tier 2 accounts" value="Tier 2 accounts" />
                <Picker.Item label="Others/Opportunistic" value="Others/Opportunistic" />
              </Picker>
              <Text style={styles.formsSubTitle}>
                This opportunity is related to one of our Practices UPSs
              </Text>
              <Picker
                  style={styles.pickerStrategic}
                  selectedValue={selectedLanguage}
                  onValueChange={(itemValue) =>
                  setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Yes" value="Yes" />
                <Picker.Item label="No" value="No" />
              </Picker>
              <Text style={styles.formsSubTitle}>
                Significant follow-on potential sales opportunities
              </Text>
              <Picker
                  style={styles.pickerStrategic}
                  selectedValue={selectedLanguage}
                  onValueChange={(itemValue) =>
                  setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Yes" value="Yes" />
                <Picker.Item label="No" value="No" />
              </Picker>
            </View>
            <View style={styles.formsContainer}>
              <H3BoldGray style={styles.formsTitle}>
                Short-term commercial considerations
              </H3BoldGray>
              <Text style={styles.formsSubTitle}>
                Immediate commercial potential
              </Text>
              <Picker
                  style={styles.pickerStrategic}
                  selectedValue={selectedLanguage}
                  onValueChange={(itemValue) =>
                  setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Likelihood of starting in the next 30 days" value="Proactive" />
                <Picker.Item label="Likelihood of starting in the next 60 days" value="Reactive" />
                <Picker.Item label="Start date later than a 2 months" value="Proactive" />
              </Picker>
              <Text style={styles.formsSubTitle}>
                Pricing aligned to agreed account terms 
              </Text>
              <Picker
                  style={styles.pickerStrategic}
                  selectedValue={selectedLanguage}
                  onValueChange={(itemValue) =>
                  setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Completely aligned" value="Proactive" />
                <Picker.Item label="Minor deviation(<15% variance)" value="Reactive" />
                <Picker.Item label="Major deviation(>15% variance)" value="Proactive" />
              </Picker>
              <Text style={styles.formsSubTitle}>
                Level of financial risk (collection, currency, market)
              </Text>
              <Picker
                  style={styles.pickerStrategic}
                  selectedValue={selectedLanguage}
                  onValueChange={(itemValue) =>
                  setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Low" value="Low" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="High" value="High" />
              </Picker>
              <Text style={styles.formsSubTitle}>
                Size of the opportunity
              </Text>
              <Picker
                  style={styles.pickerStrategic}
                  selectedValue={selectedLanguage}
                  onValueChange={(itemValue) =>
                  setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="<500k" value="<500k" />
                <Picker.Item label="500-1000k" value="500-1000k" />
                <Picker.Item label=">1000k" value=">1000k" />
              </Picker>
            </View>
          </>
        } */}
        <View style={styles.qualificationContainer}>
          <H3BoldGray style={styles.formsSubTitle}>
              Total Qualification Matrix
          </H3BoldGray>
          <Text style={styles.totalQualification}>
              {updatedLead.qualification_matrix_value}%
          </Text>
        </View>
        <Divider/>
        <TouchableOpacity>
          <Text style={styles.buttonUpdate}>UPDATE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  titleContainer: {
    backgroundColor: colors.BGtitle,
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 15
  },
  subTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  },
  partner: {
    marginRight: 90
  },
  selectorPickers: {
    marginTop: 20,
    marginBottom: 20,
    width: '70%'
  },
  secondaryTitles: {
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: colors.BGtitle,
    padding: 10,
    width: '100%',
    textAlign: 'center'
  },
  date:{
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    textAlign: 'center'
  },
  economicsData: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  textInputEconomics: {
    backgroundColor: colors.BGtitle,
    width: 50,
    height: 50,
    padding: 8,
    textAlign: 'center'
  },
  economicsTitle: {
    marginHorizontal: 30
  },
  buttonAdd: {
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 15
  },
  totalTheoreticalContainer:{
    backgroundColor: colors.blauFosc,
    padding: 20,
    marginTop: 40,
    width: '100%',
    flex: 1,
    flexDirection: 'column'
  },
  totalTopTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  totalExpenses: {
  },
  totalTheoreticalTitle:{
    marginTop: 25,
  },
  totalRevenueContainer: {
    flexDirection: 'row',
    marginBottom: 30
  },
  totalRevenue: {
    marginRight: 200
  },
  checkContainer: {
    flexDirection: 'row',
    marginTop: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '100%'
  },
  checkbox: {
    borderColor: colors.BGtitle,
    backgroundColor: colors.BGtitle,
    marginRight: 20,
    width: 20,
    height: 20
  },
  textInput: {
    borderColor: colors.BGtitle,
    backgroundColor: colors.BGtitle,
    width: 120,
    height: 40,
    borderRadius: 5,
    marginLeft: 20,
    padding: 8
  },
  textAreaContainer: {
    marginTop: 25,
    width: '90%',
  },
  textAreaTitle: {
    marginBottom: 15
  },
  textArea: {
    height:100, 
    textAlignVertical: 'top',
    backgroundColor: colors.BGtitle,
    borderRadius: 5,
    marginBottom: 20,
    padding: 8
  },
  picker: {
    width: '100%',
    height: 40,
    borderColor: colors.grisDelta,
    borderRadius: 5,
    paddingLeft: 8
  },
  picker2:{
    width: '100%',
    height: 40,
    borderColor: colors.grisDelta,
    borderRadius: 5,
    paddingLeft: 8,
    marginTop: 10
  },
  formsContainer: {
    width: '95%',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginTop: 20,
    borderColor: colors.grisDelta,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.white
  },
  pickerStrategic: {
    width: '100%',
    height: 40,
    borderColor: colors.grisDelta,
    borderRadius: 5,
    paddingLeft: 8,
    marginTop: 10
  },
  formsTitle: {
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 15
  },
  formsSubTitle: {
    marginVertical: 10
  },
  qualificationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25
  },
  totalQualification: {
    marginVertical: 10,
    backgroundColor: colors.BGtitle,
    paddingVertical: 10,
    width: 150,
    textAlign: 'center',
    fontSize: 18
  },
  divider: {
    marginVertical: 8,
    width: '90%',
    borderBottomColor: 'gray',
    borderBottomWidth: 1
  },
  buttonUpdate: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    backgroundColor: colors.grisDelta,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 210,
    textAlign: 'center',
    marginVertical: 20,
    borderRadius: 5
  }
})

