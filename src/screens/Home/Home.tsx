import { Text } from 'react-native'

import { AdvancedSettings } from '@components/AdvancedSettings'
import { Container } from '@components/Container'
import { theme } from '@theme'

const Home = () => {
  return (
    <Container>
      <Text style={[theme.styles.heading1, { marginTop: '10%', width: '100%' }]}>
        O que você {'\n'} gostaria de
        <Text style={{ color: theme.colors.purple }}> verificar hoje</Text>?
      </Text>
      <AdvancedSettings />
    </Container>
  )
}

export default Home
