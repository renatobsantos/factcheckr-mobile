import { useEffect } from 'react'

import { Epilogue_700Bold } from '@expo-google-fonts/epilogue'
import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import { Routes } from '@routes'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  const [fontsloaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Epilogue_700Bold,
    Poppins_600SemiBold,
  })

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }

    prepare()
  }, [])

  if (!fontsloaded) {
    return undefined
  } else {
    SplashScreen.hideAsync()
  }

  return (
    <>
      <Routes />
      <StatusBar style="auto" />
    </>
  )
}
0
