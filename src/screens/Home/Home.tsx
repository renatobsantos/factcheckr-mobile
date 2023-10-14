import { StyleSheet, Text, View } from 'react-native'

import { ActiveType } from '@components/ActiveType'
import { AdvancedSettings } from '@components/AdvancedSettings'
import { Container } from '@components/Container'
import { SearchBar } from '@components/SearchBar'
import { TextForm } from '@components/TextForm'
import { VerifyButton } from '@components/VerifyButton'
import { useHomeStore } from '@store/HomeStore'
import { theme } from '@theme'

const Home = () => {
  const { activeTab, setActiveTab } = useHomeStore()

  const getActiveColor = (condition = true) => {
    if (condition) return activeTab === 'Link' ? theme.colors.black : theme.colors.gray
    else return activeTab === 'Text' ? theme.colors.black : theme.colors.gray
  }

  return (
    <Container>
      <Text style={[theme.styles.heading1, { marginTop: theme.spacing32, width: '100%' }]}>
        O que você{'\n'}gostaria de
        <Text style={{ color: theme.colors.blue }}> verificar hoje</Text>?
      </Text>
      <View style={styles.modeContainer}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ paddingRight: 20 }}>
            <Text
              onPress={() => setActiveTab('Link')}
              style={[theme.styles.heading2, { color: getActiveColor() }]}
            >
              Link
            </Text>
            {activeTab === 'Link' && <ActiveType />}
          </View>

          <View>
            <Text
              onPress={() => setActiveTab('Text')}
              style={[theme.styles.heading2, { color: getActiveColor(false) }]}
            >
              Texto
            </Text>
            {activeTab === 'Text' && <ActiveType />}
          </View>
        </View>
      </View>

      {activeTab === 'Link' ? <SearchBar /> : <TextForm />}
      <AdvancedSettings />
      <VerifyButton />
    </Container>
  )
}

const styles = StyleSheet.create({
  modeContainer: {
    marginTop: theme.spacing24,
    alignSelf: 'flex-start',
  },
})

export default Home
