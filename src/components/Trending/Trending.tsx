import { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { NewsCard } from '@components/NewsCard'
import { Feather } from '@expo/vector-icons'
import { theme } from '@theme'
import { CheckedNewsStatusEnum } from '@types'

const Trending = () => {
  const [isDown, setIsDown] = useState(true)

  const DATA = [
    {
      id: '1',
      title: 'Titulo 1',
      status: CheckedNewsStatusEnum.REAL,
      link: 'https://example.com',
      date: new Date().toLocaleDateString(),
    },
    {
      id: '2',
      title: 'Titulo 2',
      status: CheckedNewsStatusEnum.UNCERTAIN,
      date: new Date().toLocaleDateString(),
    },
    {
      id: '3',
      title: 'Titulo 3',
      status: CheckedNewsStatusEnum.FAKE,
      link: 'https://example.com',
      date: new Date().toLocaleDateString(),
    },
    {
      id: '4',
      title: 'Titulo 4',
      status: CheckedNewsStatusEnum.REAL,
      link: 'https://example.com',
      date: new Date().toLocaleDateString(),
    },
    {
      id: '5',
      title: 'Titulo 5',
      status: CheckedNewsStatusEnum.UNCERTAIN,
      date: new Date().toLocaleDateString(),
    },
    {
      id: '6',
      title: 'Titulo 6',
      status: CheckedNewsStatusEnum.FAKE,
      link: 'https://example.com',
      date: new Date().toLocaleDateString(),
    },
  ]

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setIsDown(!isDown)}
        activeOpacity={0.7}
      >
        <View style={{ flexDirection: 'row', width: '50%' }}>
          <Text style={theme.styles.heading2}>Em Alta</Text>
          <Feather
            name="trending-up"
            size={24}
            color={theme.colors.orange}
            style={{ paddingLeft: '5%' }}
          />
        </View>
        <Feather name={isDown ? 'chevron-down' : 'chevron-up'} size={28} />
      </TouchableOpacity>

      {isDown && (
        <FlatList
          data={DATA}
          style={styles.newsContainer}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NewsCard title={item.title} status={item.status} link={item.link} date={item.date} />
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '55%',
    marginTop: '7%',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  newsContainer: {
    width: '100%',
    height: '90%',
    marginTop: '5%',
  },
})

export default Trending
