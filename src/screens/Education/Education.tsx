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

  const DATA2 = [
    {
      id: '1',
      title: 'Os problemas que as Fake News implicam na nossa sociedade',
      link: 'https://example.com',
      type: 'Video',
      time: 5,
    },
    {
      id: '2',
      title: 'Sinais para identificar Fake News',
      description:
        'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.',
      type: 'Article',
      time: 5,
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

      <View style={{ width: '100%' }}>
        <View style={{ flexDirection: 'row', width: '100%', marginBottom: theme.spacing10 }}>
          <Text style={theme.styles.heading2}>Quiz</Text>
          <Feather name="zap" size={24} color={theme.colors.yellow} style={{ paddingLeft: '3%' }} />
        </View>

        <FlatList
          horizontal
          data={DATA}
          style={{ width: '100%' }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.quizContainer} activeOpacity={0.5}>
              <Text style={{ fontSize: 20, fontFamily: theme.fonts.PoppinsBold }}>NÍVEL</Text>
              <Text style={{ fontSize: 32, lineHeight: 36, fontFamily: theme.fonts.PoppinsBold }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <Text style={[theme.styles.heading2, { width: '100%', marginTop: theme.spacing24 }]}>
        Artigos e Vídeos
      </Text>

      <View style={{ width: '100%', height: '45%' }}>
        <FlatList
          data={DATA2}
          style={{ width: '100%', marginTop: theme.spacing24 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.cardContainer} activeOpacity={0.5}>
              <View style={styles.imageContainer}></View>

              <View style={{ width: '65%', height: '100%', padding: 10 }}>
                <Text style={theme.styles.heading3}>{item.title}</Text>
                <Text
                  style={[
                    theme.styles.bodySm,
                    item.type === 'Article' && { color: theme.colors.gray, marginTop: 4 },
                    item.type === 'Video' && theme.styles.link,
                  ]}
                >
                  {item.type === 'Article' ? item.description : item.link}
                </Text>
                <View style={styles.typeContainer}>
                  <Feather name={item.type === 'Article' ? 'file-text' : 'play-circle'} size={24} />
                  <Text
                    style={[
                      theme.styles.bodySm,
                      { marginLeft: theme.spacing10, color: theme.colors.gray },
                    ]}
                  >
                    {item.time} min
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
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
    marginTop: theme.spacing32,
    marginBottom: theme.spacing24,
    backgroundColor: theme.colors.blue,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing20,
    paddingRight: theme.spacing10,
  },
  quizContainer: {
    width: 90,
    height: 110,
    backgroundColor: 'white',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginRight: theme.spacing10,
  },
  cardContainer: {
    width: '100%',
    height: theme.spacing64 * 3,
    marginBottom: theme.spacing10,
    borderRadius: 32,
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  imageContainer: {
    width: '35%',
    height: '100%',
    borderTopStartRadius: 32,
    borderBottomStartRadius: 32,
    backgroundColor: theme.colors.gray,
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: theme.spacing10,
    bottom: theme.spacing10,
  },
})

export default Education
