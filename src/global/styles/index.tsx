import { Dimensions, StyleSheet } from 'react-native'

export const theme = {
  colors: {
    black: '#000000',
    blue: '#0069FF',
    white: '#FFFFFF',
    gray: '#AEAEAE',
    green: '#51FF42',
    orange: '#FA7236',
    red: '#FF4242',
    yellow: '#FFCA42',
  },
  fonts: {
    InterLight: 'Inter_300Light',
    InterRegular: 'Inter_400Regular',
    InterMedium: 'Inter_500Medium',
    InterBold: 'Inter_700Bold',
    EpilogueBold: 'Epilogue_700Bold',
    PoppinsMedium: 'Poppins_500Medium',
    PoppinsSemiBold: 'Poppins_600SemiBold',
    PoppinsBold: 'Poppins_700Bold',
  },
  screen_width: Dimensions.get('window').width,
  screen_height: Dimensions.get('window').height,
  styles: StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
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
    bodyMd: {
      fontSize: 16,
      color: '#000000',
      fontFamily: 'Inter_400Regular',
    },
    bodySm: {
      fontSize: 12,
      color: '#000000',
      fontFamily: 'Inter_400Regular',
    },
  }),
}
