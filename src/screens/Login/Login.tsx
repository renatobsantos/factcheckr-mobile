import { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { StackNavigationProp } from '@react-navigation/stack'

import { Container } from '@components/Container'
import { Feather } from '@expo/vector-icons'
import { theme } from '@theme'
import { ProfileParamsList } from '@types'

interface LoginProps {
  navigation: StackNavigationProp<ProfileParamsList, 'Login'>
}

const Login = ({ navigation }: LoginProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
  const [isCreatingAccount, setIsCreatingAccount] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handlePasswordIcon = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const handleCreateAccount = () => {
    setIsCreatingAccount(!isCreatingAccount)
    resetFormFields()
  }

  const resetFormFields = () => {
    setName('')
    setEmail('')
    setPassword('')
  }

  const setLoginDisabled = () => {
    if (email === '' && password === '') return true
    return false
  }

  const setCreatingAccountDisabled = () => {
    if (name === '' && setLoginDisabled()) return true
    return false
  }

  const setOpacity = () => {
    if ((isCreatingAccount && name === '') || email === '' || password === '') return false
    return true
  }

  return (
    <Container>
      <View style={styles.container}>
        <TouchableOpacity style={styles.arrowContainer} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={30} />
          <Text style={[theme.styles.heading3, { marginLeft: 5 }]}>Voltar</Text>
        </TouchableOpacity>

        <View style={styles.formContainer}>
          <Text style={theme.styles.heading2}>
            {isCreatingAccount ? 'Crie uma conta!' : 'Bem vindo de volta!'}
          </Text>

          <Text style={{ marginBottom: theme.spacing20 }}>
            {isCreatingAccount ? 'Já tem conta? ' : 'Ainda nem tem conta? '}
            <Text style={{ color: theme.colors.blue }} onPress={handleCreateAccount}>
              {isCreatingAccount ? 'Entrar' : 'Crie uma'}
            </Text>
          </Text>

          {isCreatingAccount && (
            <TextInput
              placeholder="Nome"
              placeholderTextColor="#9E9E9E"
              style={styles.inputContainer}
              onChangeText={(text) => {
                setName(text)
              }}
              value={name}
            />
          )}

          <TextInput
            placeholder="Email"
            placeholderTextColor="#9E9E9E"
            style={styles.inputContainer}
            onChangeText={(text) => {
              setEmail(text)
            }}
            value={email}
          />

          <View style={styles.passwordInputContainer}>
            <TextInput
              placeholder="Senha"
              placeholderTextColor="#9E9E9E"
              style={styles.inputContainer}
              onChangeText={(text) => {
                setPassword(text)
              }}
              value={password}
            />

            {isPasswordVisible ? (
              <Feather
                name="eye-off"
                size={20}
                style={styles.iconContainer}
                onPress={handlePasswordIcon}
              />
            ) : (
              <Feather
                name="eye"
                size={20}
                style={styles.iconContainer}
                onPress={handlePasswordIcon}
              />
            )}
          </View>

          <TouchableOpacity
            style={[styles.buttonContainer, { opacity: setOpacity() ? 1 : 0.5 }]}
            disabled={isCreatingAccount ? setCreatingAccountDisabled() : setLoginDisabled()}
            onPress={handlePasswordIcon}
          >
            <Text style={[theme.styles.heading2, styles.buttonText]}>
              {isCreatingAccount ? 'Criar' : 'Entrar'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    minHeight: '100%',
    display: 'flex',
    textAlign: 'center',
    backgroundColor: theme.colors.background,
  },

  arrowContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },

  formContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingVertical: 130,
  },

  inputContainer: {
    width: '100%',
    height: theme.spacing64,
    backgroundColor: theme.colors.white,
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing10,
    paddingHorizontal: theme.spacing20,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: theme.spacing16,
    borderWidth: 1,
    borderColor: theme.colors.border,
    fontSize: 16,
    fontFamily: theme.fonts.InterRegular,
  },

  passwordInputContainer: {
    width: '100%',
    position: 'relative',
  },

  iconContainer: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    top: '45%',
    bottom: 0,
    right: 10,
  },

  buttonContainer: {
    minWidth: '100%',
    height: theme.spacing64,
    borderRadius: theme.spacing16,
    backgroundColor: theme.colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: theme.colors.white,
  },
})

export default Login
