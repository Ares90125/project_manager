import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { CreateLeadMCScreen } from '../screen/CreateLeadMCScreen'
import { Alert, StyleSheet, View, Text } from 'react-native'
import { EditLeadMCScreen } from '../screen/EditLeadMCScreen'
import { AccountScreen } from '../screen/AccountScreen'
import { AccountMembersScreen } from '../screen/AccountMembersScreen'
import { MyLeadsMCScreen } from '../screen/MyLeadsMCScreen'
import { MyAccountsScreen } from '../screen/MyAccountsScreen'
import { ChangelogScreen } from '../screen/ChangelogScreen'
import { SettingsScreen } from '../screen/SettingsScreen'
import { config } from '../config'
import { FontAwesome5 } from '@expo/vector-icons'
import { HeaderButtonCreate } from './component/HeaderButtonCreate'
import { NavigationButtonCreate } from './component/NavigationButtonCreate'
import SideMenu from 'react-native-side-menu-updated'
import { Dimensions } from 'react-native';
import { colors } from '../design'
import SideMenuContent from './component/SideMenuContent';
import React from 'react'

type MCStackParamList = {
  MCTabNavigator: NavigatorScreenParams<MCTabParamList> | undefined
  CreateLeadMCScreen: undefined
  EditLeadMCScreen: { item: any }
  AccountScreen: {
    accountId: number
  }
  AccountMembersScreen: undefined
}

export type MCStackScreenProps<Screen extends keyof MCStackParamList> =
  NativeStackScreenProps<MCStackParamList, Screen>

const Stack = createNativeStackNavigator<MCStackParamList>()

export function MCNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MCTabNavigator"
        component={MCTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateLeadMCScreen"
        component={CreateLeadMCScreen}
        options={{ title: 'Create Lead MC' }}
      />
      <Stack.Screen
        name="EditLeadMCScreen"
        component={EditLeadMCScreen}
        options={{ title: 'Edit Lead MC' }}
      />
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{ title: 'Account' }}
      />
      <Stack.Screen
        name="AccountMembersScreen"
        component={AccountMembersScreen}
        options={{ title: 'Account Members' }}
      />
    </Stack.Navigator>
  )
}

type MCTabParamList = {
  MyLeadsMCScreen: undefined
  MyAccountsScreen: undefined
  ChangelogScreen: undefined
  SettingsScreen: undefined
}

/**
 * Type for Props of a bottom tab screen, eg:
 * ```
 * function MyLeadsMCScreen({}: MCTabScreenProps<'MyLeadsMCScreen'>)
 * ```
 */
export type MCTabScreenProps<Screen extends keyof MCTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MCTabParamList, Screen>,
    NativeStackScreenProps<MCStackParamList>
  >

/**
 * Type for useNavigation() used in a component in of bottom tab screen, eg:
 * ```
 * const navigation = useNavigation<MCTabScreenNavigationProp<'MyLeadsMCScreen'>>()
 * ```
 */
export type MCTabScreenNavigationProp<Screen extends keyof MCTabParamList> =
  MCTabScreenProps<Screen>['navigation']

const Tab = createBottomTabNavigator<MCTabParamList>()
const isOpen=false;
function MCTabNavigator() {

  const [isOpen,  setIsopen] = React.useState(false);
  return (
    <SideMenu menu={SideMenuContent({type:false})}  isOpen={isOpen} onChange={()=>{setIsopen(!isOpen);}} openMenuOffset={Dimensions.get('window').width*0.2}>
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#fc9824',
        tabBarLabelPosition:'below-icon',
        headerTitleAlign:'center',
        headerTitleStyle:{
          color:'white'
        },
        headerStyle:{
          backgroundColor:'#223346',
          display:'flex',
          justifyContent:'center',
        },
        tabBarStyle: {
          height: 50,
          paddingTop: 10,
          paddingBottom: 5
        }
      }}
    >
      <Tab.Screen
        name="MyLeadsMCScreen"
        component={MyLeadsMCScreen}
        options={({ navigation }: MCTabScreenProps<'MyLeadsMCScreen'>) => ({
          tabBarLabel: config.enableDebugFeatures ? 'My Leads MC' : 'My Leads',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="bullseye" size={20} color={color} />
          ),
          tabBarStyle: {
            backgroundColor: colors.BG
          },
          headerLeft: () => (
            <NavigationButtonCreate
              onPress={() => {
                setIsopen(true);
              }}
            />
          ),
          headerRight: () => (
            <HeaderButtonCreate
              onPress={() => {
                navigation.navigate('CreateLeadMCScreen')
              }}
            />
          ),
        })}
      />
      <Tab.Screen
        name="MyAccountsScreen"
        component={MyAccountsScreen}
        options={{
          tabBarLabel: 'My Accounts',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="city" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ChangelogScreen"
        component={ChangelogScreen}
        options={{
          title: 'Pipe Changes (Log)',
          tabBarLabel: 'Log',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="list-ul" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="cog" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
    </SideMenu>
  )
}


