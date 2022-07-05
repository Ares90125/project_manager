import * as React from 'react'
import { ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { BodyLight, H2Bold, H3BoldGray } from '../component/text'
import { CFStackScreenProps } from '../navigation/CFNavigator'
import { Picker } from '@react-native-picker/picker';
import Checkbox from 'expo-checkbox';
import { colors } from '../design'



export function EditLeadCFScreen({}: CFStackScreenProps<'EditLeadCFScreen'>) {


  const [isChecked, setChecked] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState();

  const Divider = () => <View style={styles.divider}/>

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <H2Bold >Nombre Lead</H2Bold>
            <View style={styles.subTitle}>
              <BodyLight>Partner: Victor Sunyer</BodyLight>
            </View>
        </View>
        <View style={styles.selectorPickers}>
          <Picker
              style={styles.picker}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Proactive" value="Proactive" />
            <Picker.Item label="Reactive" value="Reactive" />
          </Picker>
          <Picker
              style={styles.picker2}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="No info yet" value="No info yet" />
            <Picker.Item label="Single sourced-No competition" value="Single sourced-No competition" />
            <Picker.Item label="1 Competitor" value="1 Competitor" />
            <Picker.Item label="2 Competitors" value="2 Competitors" />
            <Picker.Item label="3 Competitors" value="3 Competitors" />
            <Picker.Item label="4 Competitors" value="4 Competitors" />
            <Picker.Item label="5 Competitors" value="5 Competitors" />
            <Picker.Item label="More than 5 Competitors" value="More than 5 Competitors" />
          </Picker>
        </View>
        <Text style={styles.secondaryTitles}>
          START DATE
        </Text>
        <View style={styles.date}>
          <BodyLight>26 Feb '20</BodyLight>
        </View>
        <Text style={styles.secondaryTitles}>
          REVENUE TYPE
        </Text>
        <View style={styles.selectorPickers}>
          <Picker
              style={styles.picker}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Advisory" value="Advisory" />
            <Picker.Item label="M&A" value="M&A" />
            <Picker.Item label="Partnership" value="Partnership" />
            <Picker.Item label="TS" value="TS" />
          </Picker>
        </View>
        <Text style={styles.secondaryTitles}>
          RETAINER PROBABILITY
        </Text>
        <View style={styles.date}>
          <BodyLight>Linea de progreso</BodyLight>
        </View>
        <Text style={styles.secondaryTitles}>
          ECONOMICS
        </Text>
        <View style={styles.economicsContainer}>
          <View style={styles.economicsInputs}>
            <BodyLight style={styles.economicsTitle}>Duration (Weeks):</BodyLight>
            <TextInput style={styles.textInputEconomics}/>
          </View>
          <View style={styles.economicsInputs}>
            <BodyLight style={styles.economicsTitle}>Engagements Fees:</BodyLight>
            <TextInput style={styles.engagementsFeesInput}/>
          </View>
          <View style={styles.checkboxInputContainer}>
            <Checkbox 
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#23203f' : '#f2f2f2'}/>
            <BodyLight style={styles.economicsTitle}>Succes Fee: </BodyLight>
            <TextInput style={styles.succesFeeInput}/>
          </View>
        </View>
        <Text style={styles.secondaryTitles}>
          SUCCESS FEE PROBABILITY
        </Text>
        <View style={styles.date}>
          <BodyLight>Linea de progreso</BodyLight>
        </View>
        <Text style={styles.secondaryTitles}>
          QUALIFICATION MATRIX
        </Text>
        <View style={styles.formsContainer}>
          <H3BoldGray style={styles.formsTitle}>
            Strategic Considerations
          </H3BoldGray>
          <Text style={styles.formsSubTitle}>
            Long term 'platform' opportunity
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
            Relevance of the topic or sector fro IB
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
            Conflict with other projects or DP BUs
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
            <Picker.Item label="Likelihood of starting in the next 10 days" value="Likelihood of starting in the next 10 days" />
            <Picker.Item label="Likelihood of starting in the next month" value="Likelihood of starting in the next month" />
            <Picker.Item label="Start date later in the month" value="Start date later in the month" />
          </Picker>
          <Text style={styles.formsSubTitle}>
            Size of opportunity
          </Text>
          <Picker
              style={styles.pickerStrategic}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="More than $1.5m" value="More than $1.5m" />
            <Picker.Item label="Between $500k and $1.5m" value="Between $500k and $1.5m" />
            <Picker.Item label="Between $200 and $500k" value="Between $200 and $500k" />
          </Picker>
          <Text style={styles.formsSubTitle}>
            Short terms revenue with limited risk
          </Text>
          <Picker
              style={styles.pickerStrategic}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="5% fixed fee / 95% SF" value="5% fixed fee / 95% SF" />
            <Picker.Item label="20% fixed fee / 80% SF" value="20% fixed fee / 80% SF" />
            <Picker.Item label="100% fixed" value="100% fixed" />
          </Picker>
          <Text style={styles.formsSubTitle}>
            Probability of choosen a transaction (if SF involved)
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
            Intensity of resources required
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
        </View>
        <View style={styles.qualificationContainer}>
          <H3BoldGray style={styles.formsSubTitle}>
              Total Qualification Matrix
          </H3BoldGray>
          <Text style={styles.totalQualification}>
              0%
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
    marginBottom: 15
  },
  subTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  },
  selectorPickers: {
    marginTop: 20,
    marginBottom: 20,
    width: '70%'
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
    padding: 12,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: colors.BGtitle,
    width: '60%',
    textAlign: 'center'
  },
  economicsTitle: {
    marginRight: 30
  },
  textInputEconomics: {
    backgroundColor: colors.BGtitle,
    width: 50,
    height: 50,
    padding: 8,
    textAlign: 'center'
  },
  checkbox: {
    borderColor: colors.transparent,
    backgroundColor: colors.BGtitle,
    marginRight: 20,
    width: 20,
    height: 20
  },
  economicsContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    marginBottom: 40,
    padding: 30
  },
  economicsInputs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  engagementsFeesInput:{
    backgroundColor: colors.BGtitle,
    width: 160,
    height: 50,
    padding: 8,
    textAlign: 'center'
  },
  succesFeeInput: {
    backgroundColor: colors.BGtitle,
    width: 160,
    height: 50,
    padding: 8,
    textAlign: 'center'
  },
  checkboxInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 70
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
