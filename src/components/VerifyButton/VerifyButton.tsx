import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { theme } from '@theme'

const VerifyButton = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Text style={[theme.styles.heading1, { color: theme.colors.white }]}>Verificar</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '60%',
    height: 54,
    backgroundColor: theme.colors.blue,
    borderRadius: theme.spacing32,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: theme.spacing32,
  },
})

export default VerifyButton
