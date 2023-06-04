import { StyleSheet, Text, View } from 'react-native'

import { theme } from '@theme'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={theme.styles.headingLogo}>
        Fact<Text style={{ color: theme.colors.blue }}>Checkr</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    marginTop: '15%',
    alignItems: 'center',
  },
})

export default Header
