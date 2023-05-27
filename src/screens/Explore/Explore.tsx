import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { Container } from '@components/Container'
import { SearchBar } from '@components/SearchBar'
import { Trending } from '@components/Trending'
import { Feather } from '@expo/vector-icons'
import { theme } from '@theme'

const Explore = () => {
  return (
    <Container>
      <Text style={[theme.styles.heading1, { marginTop: '10%', width: '100%' }]}>
        Pesquisar Notícias
      </Text>
      <TouchableOpacity style={styles.linkContainer} activeOpacity={0.7}>
        <Text style={styles.link}>Suas pesquisas</Text>
        <Feather
          name="chevron-right"
          size={20}
          color={theme.colors.purple}
          style={{ paddingLeft: '1%' }}
        />
      </TouchableOpacity>
      <SearchBar />
      <Trending />
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
    color: theme.colors.purple,
    fontSize: 16,
    fontFamily: theme.fonts.InterMedium,
    textDecorationLine: 'underline',
  },
})

export default Explore
