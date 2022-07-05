import * as React from 'react'
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import { BodyLight, H2BoldWhite, BodyLightWhite, H3BoldGray } from '../component/text'
import { MCStackScreenProps } from '../navigation/MCNavigator'
import { Picker } from '@react-native-picker/picker';
import Checkbox from 'expo-checkbox';
import { colors } from '../design'

export function CreateLeadMCScreen({}: MCStackScreenProps<'CreateLeadMCScreen'>) {

  const [isChecked, setChecked] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState();


  return (
  <ScrollView>
  <View style={styles.container}>
    <Text style={styles.secondaryTitles}>
      DEAL NAME - MF
    </Text>
    <View style={styles.selectorPickers}>
      <Picker
          style={styles.picker}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Account:" value="Account:" />
      </Picker>
      <Picker
          style={styles.picker}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Subaccount:" value="Subaccount:" />
      </Picker>
      <TextInput style={styles.textInput} placeholder={'Opportunity Name'}/>
      <Picker
          style={styles.picker}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Origination:" value="Origination:" />
      </Picker>
      <Picker
          style={styles.picker}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Number of firms competing:" value="Number of firms competing:" />
      </Picker>
    </View>
    <Text style={styles.secondaryTitles}>
      GEOGRAPHICAL AREAS
    </Text>
    <View style={styles.selectorPickers}>
      <Picker
            style={styles.picker}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Location:" value="Location:" />
      </Picker>
      <TextInput style={styles.textInput} placeholder={'Project Location (city)'}/>
    </View>
    <Text style={styles.secondaryTitles}>
      SET START DATE
    </Text>
    <View style={styles.graphicItems}>
      <BodyLight>Date picker</BodyLight>
    </View>
    <Text style={styles.secondaryTitles}>
      PROBABILITY
    </Text>
    <View style={styles.graphicItems}>
      <BodyLight>Linea de progreso</BodyLight>
    </View>
    <Text style={styles.secondaryTitles}>
      ECONOMICS
    </Text>
    <View style={styles.economicsData}>
      <H3BoldGray>Phase 1</H3BoldGray>
      <BodyLight style={styles.economicsTitle}>Weeks:</BodyLight>
      <TextInput style={styles.textInputEconomics}/>
      <BodyLight style={styles.economicsTitle}>FTEs:</BodyLight>
      <TextInput style={styles.textInputEconomics}/>
    </View>
    <TouchableOpacity>
      <Text style={styles.buttonAdd} >+ ADD PHASE</Text>
    </TouchableOpacity>
    <View style={styles.totalTheoreticalContainer}>
      <View style={styles.totalTopTitle}>
        <BodyLightWhite style={styles.totalExpenses}>Expenses: 17%</BodyLightWhite>
        <BodyLightWhite>Fees/FTE: 8000</BodyLightWhite>
      </View>
      <H2BoldWhite style={styles.totalTheoreticalTitle}>Total Theoretical</H2BoldWhite>
        <View style={styles.totalRevenueContainer}>
          <H2BoldWhite style={styles.totalRevenue}>Revenue</H2BoldWhite>
        </View>
    </View>
    <View style={styles.checkContainer}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? '#23203f' : '#f2f2f2'}
      />
      <Text>Overwrite Revenue Amount</Text>
    </View>
    <View style={styles.successFeeContainer}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? '#23203f' : '#f2f2f2'}
      />
      <Text>Success Fee</Text>
      <TextInput style={styles.successFeeInput} />
    </View>
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
    <TouchableOpacity>
      <Text style={styles.buttonUpdate}>CREATE</Text>
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
    padding: 40,
    marginBottom: 15
  },
  selectorPickers: {
    marginTop: 20,
    marginBottom: 20,
    width: '70%'
  },
  picker: {
    width: '100%',
    marginBottom: 10,
    height: 40,
    borderColor: colors.grisDelta,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  textInput: {
    borderColor: colors.transparent,
    backgroundColor: colors.BGtitle,
    width: '100%',
    height: 40,
    borderRadius: 5,
    marginBottom: 10,
    padding: 8
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
  graphicItems:{
    padding: 12,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: colors.BGtitle,
    width: '60%',
    textAlign: 'center'
  },
  economicsData: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
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
    alignItems: 'center'
  },
  totalExpenses: {
    marginRight: 165
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
    borderColor: colors.transparent,
    backgroundColor: colors.BGtitle,
    marginRight: 20,
    width: 20,
    height: 20
  },
  successFeeContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '100%'
  },
  successFeeInput: {
    borderColor: colors.transparent,
    backgroundColor: colors.BGtitle,
    width: 140,
    height: 40,
    borderRadius: 5,
    marginLeft: 20,
    padding: 8
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
    marginTop: 10
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

