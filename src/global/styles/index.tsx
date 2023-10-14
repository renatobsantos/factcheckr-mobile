import { Dimensions, StyleSheet } from 'react-native'

export const theme = {
  colors: {
    background: '#FAFAFA',
    black: '#1E1E1E',
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
    InterRegular: 'Inter_400Regular',
    EpilogueBold: 'Epilogue_700Bold',
    PoppinsMedium: 'Poppins_500Medium',
    PoppinsSemiBold: 'Poppins_600SemiBold',
    PoppinsBold: 'Poppins_700Bold',
  },
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height,
  spacing10: 10,
  spacing12: 12,
  spacing16: 16,
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
      color: '#1E1E1E',
    },
    heading1: {
      fontSize: 24,
      fontFamily: 'Poppins_600SemiBold',
      color: '#1E1E1E',
    },
    heading2: {
      fontSize: 20,
      fontFamily: 'Poppins_600SemiBold',
      color: '#1E1E1E',
    },
    heading3: {
      fontSize: 16,
      fontFamily: 'Poppins_600SemiBold',
      color: '#1E1E1E',
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
