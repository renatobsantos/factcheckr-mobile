import { ReactNode } from 'react'
import { View } from 'react-native'

import { Header } from '@components/Header'
import { theme } from '@theme'

interface ContainerProps {
  children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <View style={theme.styles.container}>
      <Header />
      {children}
    </View>
  )
}

export default Container
