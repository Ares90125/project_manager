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
import { CreateLeadCFScreen } from '../screen/CreateLeadCFScreen'
import { EditLeadCFScreen } from '../screen/EditLeadCFScreen'
import { AccountMembersScreen } from '../screen/AccountMembersScreen'
import { MyLeadsCFScreen } from '../screen/MyLeadsCFScreen'
import { ChangelogScreen } from '../screen/ChangelogScreen'
import { SettingsScreen } from '../screen/SettingsScreen'
import { config } from '../config'
import { FontAwesome5 } from '@expo/vector-icons'
import { HeaderButtonCreate } from './component/HeaderButtonCreate'


type CFStackParamList = {
  CFTabNavigator: NavigatorScreenParams<CFTabParamList> | undefined
  CreateLeadCFScreen: undefined
  EditLeadCFScreen: undefined
  AccountMembersScreen: undefined
}

export type CFStackScreenProps<Screen extends keyof CFStackParamList> =
  NativeStackScreenProps<CFStackParamList, Screen>

const Stack = createNativeStackNavigator<CFStackParamList>()

export function CFNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CFTabNavigator"
        component={CFTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateLeadCFScreen"
        component={CreateLeadCFScreen}
        options={{ title: 'Create Lead CF' }}
      />
      <Stack.Screen
        name="EditLeadCFScreen"
        component={EditLeadCFScreen}
        options={{ title: 'Edit Lead CF' }}
      />
      <Stack.Screen
        name="AccountMembersScreen"
        component={AccountMembersScreen}
        options={{ title: 'Account Members' }}
      />
    </Stack.Navigator>
  )
}

type CFTabParamList = {
  MyLeadsCFScreen: undefined
  ChangelogScreen: undefined
  SettingsScreen: undefined
}

/**
 * Type for Props of a bottom tab screen, eg:
 * ```
 * function MyLeadsCFScreen({}: CFTabScreenProps<'MyLeadsCFScreen'>)
 * ```
 */
export type CFTabScreenProps<Screen extends keyof CFTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<CFTabParamList, Screen>,
    NativeStackScreenProps<CFStackParamList>
  >

/**
 * Type for useNavigation() used in a component in of bottom tab screen, eg:
 * ```
 * const navigation = useNavigation<CFTabScreenNavigationProp<'MyLeadsCFScreen'>>()
 * ```
 */
export type CFTabScreenNavigationProp<Screen extends keyof CFTabParamList> =
  CFTabScreenProps<Screen>['navigation']

const Tab = createBottomTabNavigator<CFTabParamList>()

function CFTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#fc9824',
        tabBarStyle: {
          height: 50,
          paddingTop: 10,
          paddingBottom: 5
        }
      }}
    >
      <Tab.Screen
        name="MyLeadsCFScreen"
        component={MyLeadsCFScreen}
        options={({ navigation }: CFTabScreenProps<'MyLeadsCFScreen'>) => ({
          title: config.enableDebugFeatures ? 'My Leads CF' : 'My Leads',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="bullseye" size={20} color={color} />
          ),
          headerRight: () => (
            <HeaderButtonCreate
              onPress={() => {
                navigation.navigate('CreateLeadCFScreen')
              }}
            />
          ),
          
        })}
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
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="cog" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
