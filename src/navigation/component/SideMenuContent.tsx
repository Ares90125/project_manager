import React, { useState } from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons'

const SideMenuContent = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <LinearGradient colors={['#223346', '#505f6e', '#76848f']} style={styles.sidebarContainer}>
      <Text style={{ color: 'white', fontSize: 22, marginTop: 80 }}>
        DELTA PARTNERS
      </Text>
      <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
        <Text style={{ color: '#fc9824', fontSize: 14, fontWeight: 'bold', padding: 30 }}>
          MENU
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
          <Text style={isEnabled
            ? { color: '#7b8994', fontSize: 18, fontWeight: 'bold', paddingHorizontal: 10 }
            : { color: 'white', fontSize: 18, fontWeight: 'bold', paddingHorizontal: 10 }
            }>PIPE MC</Text>
          <Switch
            trackColor={{ false: "#ffffff", true: "#ffffff" }}
            thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
            ios_backgroundColor="#ffffff"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ height: 30 }}
          />
          <Text style={!isEnabled
            ? { color: '#7b8994', fontSize: 18, fontWeight: 'bold', paddingHorizontal: 10 }
            : { color: 'white', fontSize: 18, fontWeight: 'bold', paddingHorizontal: 10 }
            }>PIPE FC</Text>
        </View>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', padding: 20 }}>
          ACC MEMBERS
        </Text>
        <View style={{ flexDirection: 'row', padding: 10 }}>
          <FontAwesome5 name="rightfrombracket" size={20} />
          <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', paddingLeft: 5 }}>LOG OUT</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Text style={{ color: 'white', fontSize: 12 }}>
          2017 Copyright © &nbsp;
        </Text>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>
          Delta Partners Group
        </Text>
      </View>
    </LinearGradient>
  );
};

export default SideMenuContent;

// #223346
// #505F6E
// #76848F

const styles = StyleSheet.create({
  sidebarContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'space-between',
    padding: 20
  },
  welcome: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    color: 'red',
  },
  instructions:{
    marginBottom: 3
  }
});