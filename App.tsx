import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { LoginNavigator } from './src/navigation/LoginNavigator'
import { CFNavigator } from './src/navigation/CFNavigator'
import { MCNavigator } from './src/navigation/MCNavigator'
import { observer } from 'mobx-react-lite'
import { useInitUser, userStore } from './src/module/user/UserStore'
import { modeStore } from './src/module/mode/ModeStore'

export default function App() {
  useInitUser()
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <NavigatorSwitch />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const NavigatorSwitch = observer(() => {
  if (!userStore.user) {
    return <LoginNavigator />
  } else if (modeStore.mode === 'CF') {
    return <CFNavigator />
  } else {
    return <MCNavigator />
  }
})
