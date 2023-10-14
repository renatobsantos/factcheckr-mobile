import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { ActiveType } from '@components/ActiveType'
import { Container } from '@components/Container'
import { SearchBar } from '@components/SearchBar'
import { Trending } from '@components/Trending'
import { useExploreStore } from '@store/ExploreStore'
import { theme } from '@theme'

const Explore = () => {
  const { activeTab, setActiveTab } = useExploreStore()

  const getActiveColor = (condition = true) => {
    if (condition) return activeTab === 'Trending' ? theme.colors.black : theme.colors.gray
    else return activeTab === 'MyVerifications' ? theme.colors.black : theme.colors.gray
  }

  return (
    <Container>
      <Text style={[theme.styles.heading1, { marginTop: theme.spacing32, width: '100%' }]}>
        Explore{'\n'}notícias
        <Text style={{ color: theme.colors.blue }}> verificadas</Text>
      </Text>
      <View style={styles.modeContainer}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ paddingRight: 20 }}>
            <Text
              onPress={() => setActiveTab('Trending')}
              style={[theme.styles.heading2, { color: getActiveColor() }]}
            >
              Em alta
            </Text>
            {activeTab === 'Trending' && <ActiveType />}
          </View>

          <View>
            <Text
              onPress={() => setActiveTab('MyVerifications')}
              style={[theme.styles.heading2, { color: getActiveColor(false) }]}
            >
              Minhas verificações
            </Text>
            {activeTab === 'MyVerifications' && <ActiveType />}
          </View>
        </View>
      </View>
      <SearchBar placeholder="Digite o título da notícia" isHomePage={false} />
      {/* TODO: Add MyVerificationsComponent */}
      {activeTab === 'Trending' ? <Trending /> : <Trending />}
    </Container>
  )
}

const styles = StyleSheet.create({
  linkContainer: {
    width: '100%',
    marginTop: '4%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    color: theme.colors.blue,
    fontSize: 16,
    fontFamily: theme.fonts.InterMedium,
    textDecorationLine: 'underline',
  },
  modeContainer: {
    marginTop: theme.spacing24,
    alignSelf: 'flex-start',
  },
})

export default Explore
