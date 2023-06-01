import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { theme } from '@theme'

interface HeaderProps {
  isProfilePage?: boolean
}

const Header = ({ isProfilePage = false }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Fact<Text style={[styles.headerText, { color: theme.colors.blue }]}>Checkr</Text>
      </Text>

      {!isProfilePage && (
        <TouchableOpacity style={styles.iconContainer} activeOpacity={0.7}>
          <Feather name={'user'} size={20} color={theme.colors.white} />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    marginTop: '15%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 24,
    fontFamily: theme.fonts.EpilogueBold,
  },
  iconContainer: {
    width: 36,
    height: 36,
    backgroundColor: theme.colors.black,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Header
