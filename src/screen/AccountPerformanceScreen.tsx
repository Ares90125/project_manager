import * as React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { BodyLight, BodyLight2, H2Bold, H3Bold, H5Light } from '../component/text'
import Checkbox from 'expo-checkbox';
import { colors } from '../design'


export function AccountPerformanceScreen() {

  const [isChecked, setChecked] = React.useState(false);

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.titleContainer}>
          <H2Bold >Nombre Account</H2Bold>
      </View>
      <Text style={styles.secondaryTitles}>
        PERFORMANCE VS TARGET
      </Text>
      <View style={styles.performanceTarget}>
        <BodyLight >100%: </BodyLight>
        <Text style={styles.performance}>$0</Text>
        <BodyLight>|</BodyLight>
        <BodyLight style={styles.target}>90%: </BodyLight>
        <Text>$0</Text>
      </View>
      <View style={styles.totalClosed}>
        <BodyLight>Total closed: </BodyLight>
        <Text>$0</Text>
      </View>
      <View style={styles.achievementContainer}>
        <View style={styles.boyTarget}>
          <BodyLight2>BoY Target: $0</BodyLight2>
          <BodyLight2>% Achievement</BodyLight2>
        </View>
        <View style={styles.latestTarget}>
          <BodyLight2>Latest Target: $0</BodyLight2>
          <BodyLight2>% Achievement</BodyLight2>
        </View>
      </View>
      <Text style={styles.secondaryTitles}>
        PIPELINE SIZE (Adjusted to prob.)
      </Text>
        <View style={styles.pipelineContainer}>
          <View style={styles.pipeline}>
            <BodyLight>70%</BodyLight>
            <BodyLight style={styles.pipelineDivider}/>
            <BodyLight>$0</BodyLight>
          </View>
          <View style={styles.pipeline}>
            <BodyLight>70%</BodyLight>
            <BodyLight style={styles.pipelineDivider}/>
            <BodyLight>$0</BodyLight>
          </View>
          <View style={styles.pipeline}>
            <BodyLight>70%</BodyLight>
            <BodyLight style={styles.pipelineDivider}/>
            <BodyLight>$0</BodyLight>
          </View>
          <View style={styles.total}>
            <H3Bold>Total</H3Bold>
            <H3Bold>$0</H3Bold>
          </View>
        </View>
      <Text style={styles.secondaryTitles}>
        CONVERSION RATES
      </Text>
      <View style={styles.conversionContainer}>
        <View style={styles.conversionModule}>
          <Text>
            Closed
          </Text>
          <Text>
            Lost
          </Text>
        </View>
        <BodyLight style={styles.conversionDivider}/>
        <View style={styles.conversionModule}>
          <Text>
            $0
          </Text>
          <Text>
            $0
          </Text>
        </View>
      </View>
      <Text style={styles.secondaryTitles}>
        2022 CLOSED PIPE ($m)
      </Text>
        <View style={styles.closedPipeContainer}>
          <View style={styles.checkboxContainerClosed}>
            <Checkbox 
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#23203f' : '#f2f2f2'}/>
            <Text>Closed</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox 
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#23203f' : '#f2f2f2'}/>
            <Text>Pipe</Text>
          </View>
        </View>
        <View style={styles.numbersContainer}>
          <H5Light>0.0</H5Light>
          <H5Light>0.0</H5Light>
          <H5Light>0.0</H5Light>
          <H5Light>0.0</H5Light>
          <H5Light>0.0</H5Light>
          <H5Light>0.0</H5Light>
          <H5Light>0.0</H5Light>
          <H5Light>0.0</H5Light>
          <H5Light>0.0</H5Light>
          <H5Light>0.0</H5Light>
          <H5Light>0.0</H5Light>
          <H5Light>0.0</H5Light>
        </View>
          <BodyLight style={styles.monthsDivider}/>
        <View style={styles.monthsContainer}>
          <H5Light>JAN</H5Light>
          <H5Light>FEB</H5Light>
          <H5Light>MAR</H5Light>
          <H5Light>APR</H5Light>
          <H5Light>MAY</H5Light>
          <H5Light>JUN</H5Light>
          <H5Light>JUL</H5Light>
          <H5Light>AUG</H5Light>
          <H5Light>SEP</H5Light>
          <H5Light>OCT</H5Light>
          <H5Light>NOV</H5Light>
          <H5Light>DEC</H5Light>
        </View>
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
    width: '100%',
    height: '100%'
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
  formsTitle: {
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 15
  },
  formsSubTitle: {
    marginVertical: 10
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
  performanceTarget: {
    flexDirection: 'row',
    margin: 20
  },
  performance: {
    marginRight: 30
  },
  target: {
    marginLeft: 30
  },
  achievementContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25
  },
  boyTarget: {
    textAlign: 'center',
    flexDirection: 'column',
    marginRight: 40
  },
  latestTarget: {
    textAlign: 'center',
    flexDirection: 'column',
    marginLeft: 40
  },
  totalClosed:{
    padding: 12,
    marginTop: 20,
    backgroundColor: colors.BGtitle,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '60%',
    textAlign: 'center'
  },
  pipelineContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 15
  },
  pipeline: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    flexDirection: 'row',
    margin: 5
  },
  pipelineDivider: {
    width: 230,
    height: 4,
    marginHorizontal: 15,
    backgroundColor: colors.BGtitle
  },
  total: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.BGtitle
  },
  conversionContainer: {
    width: '90%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25
  },
  conversionModule: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  conversionDivider: {
    width: '100%',
    backgroundColor: colors.BGtitle,
    height: 15,
    marginVertical: 15,
    textAlign: 'center',
    borderRadius: 50
  },
  closedPipeContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkboxContainerClosed: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 40
  },
  checkbox: {
    borderColor: colors.transparent,
    backgroundColor: colors.BGtitle,
    marginRight: 20,
    width: 20,
    height: 20
  },
  numbersContainer: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20
  },
  monthsDivider: {
    width: '90%',
    height: 6,
    backgroundColor: colors.BGtitle,
    borderRadius: 50
  },
  monthsContainer: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30
  }
})
