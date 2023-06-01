import { ReactNode } from 'react'
import { View } from 'react-native'

import { Header } from '@components/Header'
import { theme } from '@theme'

interface ContainerProps {
  children: ReactNode
  isProfilePage?: boolean
}

const Container = ({ children, isProfilePage = false }: ContainerProps) => {
  return (
    <View style={theme.styles.container}>
      <Header isProfilePage={isProfilePage} />
      {children}
    </View>
  )
}

export default Container
