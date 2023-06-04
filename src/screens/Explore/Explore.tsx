import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { ActiveType } from '@components/ActiveType'
import { Container } from '@components/Container'
import { SearchBar } from '@components/SearchBar'
import { Trending } from '@components/Trending'
import { theme } from '@theme'

const Explore = () => {
  const [isTrending, setIsTrending] = useState(true)

  const getActiveColor = (condition = true) => {
    if (condition) return isTrending ? theme.colors.black : theme.colors.gray
    else return !isTrending ? theme.colors.black : theme.colors.gray
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
              onPress={() => setIsTrending(true)}
              style={[theme.styles.heading2, { color: getActiveColor() }]}
            >
              Em alta
            </Text>
            {isTrending && <ActiveType />}
          </View>

          <View>
            <Text
              onPress={() => setIsTrending(false)}
              style={[theme.styles.heading2, { color: getActiveColor(false) }]}
            >
              Minhas pesquisas
            </Text>
            {!isTrending && <ActiveType />}
          </View>
        </View>
      </View>
      <SearchBar placeholder="Digite o título da notícia" />
      {/* TODO: Add MyResearchComponent */}
      {isTrending ? <Trending /> : <Trending />}
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
