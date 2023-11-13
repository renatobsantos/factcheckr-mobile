import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { ActiveType } from '@components/ActiveType'
import { Container } from '@components/Container'
import { SearchBar } from '@components/SearchBar'
import { Trending } from '@components/Trending'
import { useNewsStore } from '@store/NewsStore'
import { theme } from '@theme'

const Explore = () => {
  const { newsActiveTab, setNewsActiveTab } = useNewsStore()

  const getActiveColor = (isAllNewsActive = true, isTrendingNewsActive = false): string => {
    if (isAllNewsActive) {
      return newsActiveTab === 'AllNews' ? 'text-black' : 'text-gray'
    } else if (isTrendingNewsActive) {
      return newsActiveTab === 'TrendingNews' ? 'text-black' : 'text-gray'
    } else {
      return newsActiveTab === 'UserNews' ? 'text-black' : 'text-gray'
    }
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
              onPress={() => setNewsActiveTab('AllNews')}
              style={[theme.styles.heading2, { color: getActiveColor() }]}
            >
              Todas Notícias
            </Text>
            {newsActiveTab === 'AllNews' && <ActiveType />}
          </View>

          <View style={{ paddingRight: 20 }}>
            <Text
              onPress={() => setNewsActiveTab('TrendingNews')}
              style={[theme.styles.heading2, { color: getActiveColor(false, true) }]}
            >
              Em alta
            </Text>
            {newsActiveTab === 'TrendingNews' && <ActiveType />}
          </View>

          <View>
            <Text
              onPress={() => setNewsActiveTab('UserNews')}
              style={[theme.styles.heading2, { color: getActiveColor(false, false) }]}
            >
              Minhas verificações
            </Text>
            {newsActiveTab === 'UserNews' && <ActiveType />}
          </View>
        </View>
      </View>
      <SearchBar placeholder="Digite o título da notícia" isHomePage={false} />
      {newsActiveTab === 'TrendingNews' ? <Trending /> : <Trending />}
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
