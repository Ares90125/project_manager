import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import { LoginScreen } from '../screen/LoginScreen'

type LoginStackParamList = {
  LoginScreen: undefined
}

export type LoginStackScreenProps<Screen extends keyof LoginStackParamList> =
  NativeStackScreenProps<LoginStackParamList, Screen>

const Stack = createNativeStackNavigator<LoginStackParamList>()

export function LoginNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
