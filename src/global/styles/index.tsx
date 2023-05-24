import { Dimensions, StyleSheet } from 'react-native'

export const theme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    gray: '#AEAEAE',
    purple: '#6345FE',
  },
  fonts: {
    InterLight: 'Inter_300Light',
    InterRegular: 'Inter_400Regular',
    InterMedium: 'Inter_500Medium',
    InterBold: 'Inter_700Bold',
    EpilogueBold: 'Epilogue_700Bold',
    PoppinsSemiBold: 'Poppins_600SemiBold',
  },
  screen_width: Dimensions.get('window').width,
  screen_height: Dimensions.get('window').height,
  styles: StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    heading1: {
      fontSize: 24,
      color: '#000000',
      fontFamily: 'Poppins_600SemiBold',
    },
    heading2: {
      fontSize: 20,
      color: '#000000',
      fontFamily: 'Poppins_600SemiBold',
    },
  }),
}
