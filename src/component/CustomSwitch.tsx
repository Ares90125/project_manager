 
import { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
 
interface Props {
    selectionMode:boolean,
    roundCorner:boolean,
    onSelectSwitch:(index:boolean)=>void,
    selectionColor:string
  }
const CustomSwitch = ({
  selectionMode,
  roundCorner,
  onSelectSwitch,
  selectionColor
}:Props) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const [getRoundCorner, setRoundCorner] = useState(roundCorner);
 
  const updatedSwitchData = (val:boolean) => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };
 
  return (
    <View>
      <View
        style={{
          height: 35,
          width: 73,
          backgroundColor: 'white',
          borderRadius: getRoundCorner ? 25 : 0,
          borderWidth: 1,
          borderColor: selectionColor,
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 2,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(false)}
          style={{
            shadowColor: getSelectionMode == false ? 'rgba(0,0,0, .4)':'RGBA(255,255,255,0)', 
            shadowOffset: { height: -1, width: -1 }, 
            shadowOpacity: 1,
            shadowRadius: 3, 
            elevation: 24,
            flex: 1,
             backgroundColor: getSelectionMode == false ? selectionColor : 'white',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>

        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(true)}
          style={{
            marginLeft:3,
            shadowColor: getSelectionMode == true?'rgba(0,0,0, .4)':"RGBA(255,255,255,0)",
            shadowOffset: { height: 1, width: 1 }, 
            shadowOpacity: 1, 
            shadowRadius: 3, 
            flex: 1,
            elevation: 24,
            backgroundColor: getSelectionMode == true ? selectionColor : 'white',
            borderRadius: getRoundCorner ? 35 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>

        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomSwitch;