import { Dimensions, StyleSheet } from 'react-native'

export const theme = {
  colors: {
    black: '#000000',
    blue: '#0069FF',
    white: '#FFFFFF',
    gray: '#AEAEAE',
    border: '#E7E7E7',
    green: '#0DA400',
    link: '#5A88FF',
    orange: '#FA7236',
    red: '#FF2222',
    yellow: '#FFB800',
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
  spacing10: 10,
  spacing20: 20,
  spacing24: 24,
  spacing28: 28,
  spacing32: 32,
  spacing64: 64,
  styles: StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAFAFA',
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    headingLogo: {
      fontSize: 24,
      fontFamily: 'Epilogue_700Bold',
    },
    heading1: {
      fontSize: 24,
      fontFamily: 'Poppins_600SemiBold',
    },
    heading2: {
      fontSize: 20,
      fontFamily: 'Poppins_600SemiBold',
    },
    heading3: {
      fontSize: 16,
      fontFamily: 'Poppins_600SemiBold',
    },
    link: {
      color: '#5A88FF',
      marginTop: 4,
      marginBottom: 10,
      textDecorationLine: 'underline',
    },
    bodyMd: {
      fontSize: 16,
      fontFamily: 'Inter_400Regular',
    },
    bodySm: {
      fontSize: 12,
      fontFamily: 'Inter_400Regular',
    },
  }),
}
