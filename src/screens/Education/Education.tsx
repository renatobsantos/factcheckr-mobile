import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Container } from '@components/Container'
import { Feather } from '@expo/vector-icons'
import { theme } from '@theme'

const Education = () => {
  const DATA = [
    {
      id: '1',
      title: '1',
    },
    {
      id: '2',
      title: '2',
    },
    {
      id: '3',
      title: '3',
    },
    {
      id: '4',
      title: '4',
    },
  ]
  return (
    <Container>
      <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.7}>
        <Text style={[theme.styles.heading1, { color: theme.colors.white }]}>
          O que são Fake News?
        </Text>
        <Feather name="chevron-right" size={28} color={theme.colors.white} />
      </TouchableOpacity>
      <View style={{ width: '100%', height: '23%' }}>
        <View style={{ flexDirection: 'row', width: '100%', marginBottom: '3%' }}>
          <Text style={theme.styles.heading2}>Quiz</Text>
          <Feather name="zap" size={24} color={theme.colors.yellow} style={{ paddingLeft: '3%' }} />
        </View>
        <FlatList
          horizontal
          data={DATA}
          style={{ width: '100%' }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                width: 90,
                height: 110,
                backgroundColor: 'white',
                borderRadius: 16,
                alignItems: 'center',
                justifyContent: 'center',
                borderStyle: 'solid',
                borderRightWidth: 1,
                borderBottomWidth: 1,
                borderLeftWidth: 0.5,
                borderTopWidth: 0.5,
                borderColor: theme.colors.blue,
                marginRight: 10,
              }}
            >
              <Text style={{ fontSize: 20, fontFamily: theme.fonts.PoppinsBold }}>NÍVEL</Text>
              <Text style={{ fontSize: 32, lineHeight: 36, fontFamily: theme.fonts.PoppinsBold }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <Text style={[theme.styles.heading2, { width: '100%' }]}>Artigos</Text>
      <View style={styles.articleContainer}>
        <View>
          <Text style={styles.articleText1}>Os problemas {'\n'}que as Fake News</Text>
          <Text style={[styles.articleText2, { fontSize: 20 }]}>implicam na nossa sociedade.</Text>
        </View>
        <Feather
          name="x-circle"
          size={80}
          color={theme.colors.red}
          style={{ position: 'absolute', right: 20 }}
        />
      </View>
      <View style={styles.articleContainer}>
        <View style={{ width: '60%' }}>
          <Text style={styles.articleText1}>Sinais para</Text>
          <Text style={styles.articleText2}>identificar</Text>
          <Text style={styles.articleText1}>Fake News</Text>
        </View>
        <Feather
          name="search"
          size={80}
          color={theme.colors.white}
          style={{ transform: [{ scaleX: -1 }], position: 'absolute', right: 20 }}
        />
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: '7%',
    flexDirection: 'row',
    marginTop: '10%',
    marginBottom: '10%',
    backgroundColor: theme.colors.blue,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
  },
  articleContainer: {
    width: '100%',
    height: 140,
    marginTop: '5%',
    borderRadius: 16,
    backgroundColor: theme.colors.blue,
    padding: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
  },
  articleText1: {
    fontFamily: theme.fonts.PoppinsBold,
    fontSize: 24,
    width: '80%',
    color: theme.colors.white,
  },
  articleText2: {
    fontFamily: theme.fonts.InterBold,
    fontSize: 24,
    width: '80%',
  },
})

export default Education
