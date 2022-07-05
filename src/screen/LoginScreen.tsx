import * as React from 'react'
import { Alert, TouchableOpacity, View, StyleSheet, Text, TextInput, Image, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LoginStackScreenProps } from '../navigation/LoginNavigator'
import { LoginApi } from '../module/auth/LoginApi'
import { log, prettyPrint } from '../misc/log'
import { User } from '../module/user/User'
import { userStore } from '../module/user/UserStore'
import { colors } from '../design'

export function LoginScreen({}: LoginStackScreenProps<'LoginScreen'>) {
  const passwordRef = React.useRef<TextInput>(null)

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')


  const login = () => {
    if (email === '') {
      Alert.alert('Warning', 'Please input Login');
      return;
    }
    if (password === '') {
      Alert.alert('Warning', 'Please input password');
      return;
    }
    LoginApi.login(email, password, '')
      .then((loginResponse) => {
        const user = User.fromJson(loginResponse, email)

        userStore.setUser(user)
      })
      .catch((error) => {
        log.error(`/api/sessions error`, error)
        if (error.response) {
          log.error(`/api/sessions error.response`, error.response)
        }
        const errorMessage = error.response?.data?.errors?.data?.details
        if (errorMessage) {
          Alert.alert('Error', errorMessage)
        }
      })
  }

  return (
    <SafeAreaView style={styles.container} >
      <ImageBackground style={styles.imgStyles} source={require('../../assets/splash.jpg')}>
      <Image style={styles.imgLogoStyles} source={require('../../assets/logoDeltaPartners-02.png')}/>
     
      <View style={styles.inputsContainer}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.textInput}
          placeholder="Login*"
          placeholderTextColor="gray"
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => {
            if (passwordRef.current) {
              passwordRef.current.focus()
            }
          }}
        />

        <TextInput
          ref={passwordRef}
          value={password}
          onChangeText={setPassword}
          style={styles.textInput}
          placeholder="Password*"
          placeholderTextColor="gray"
          autoCapitalize="none"
          textContentType="password"
          keyboardType="visible-password"
          returnKeyType="done"
          secureTextEntry={true}
          onSubmitEditing={login}
        />

        <Text style={styles.textFieldsMandatory}>*All fields are mandatory.</Text>
      </View>

      <TouchableOpacity style={styles.buttonSubmit} onPress={login}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>

      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFieldsMandatory: {
    color: colors.grisDelta,
    marginTop: 5,
    textAlign: 'center'
  },
  inputsContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    padding: 15,
    backgroundColor: '#f2f2f2',
    marginHorizontal: 10,
    marginVertical: 5,
    width: '80%',
    textAlign: 'center',
    justifyContent: 'center',
    fontStyle: 'italic',
    borderRadius: 6
  },
  imgStyles: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: 0
  },
  imgLogoStyles : {
    width: 300,
    height: 41,
    marginTop: 60,
    marginBottom: 120
  },
  buttonSubmit:{
    backgroundColor: colors.grisDelta,
    padding: 15,
    width: '80%',
    textAlign: 'center',
    marginTop: 40,
    borderRadius: 6
  },
  buttonText:{
    color: colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    letterSpacing: 1
  }
})
