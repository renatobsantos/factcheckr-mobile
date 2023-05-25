import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { theme } from '@theme'

const VerifyButton = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Text style={styles.text}>Verificar</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: 50,
    backgroundColor: theme.colors.purple,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
  },
  text: {
    fontSize: 20,
    color: theme.colors.white,
    fontFamily: theme.fonts.InterRegular,
  },
})

export default VerifyButton
