import { FlatList, StyleSheet, View } from 'react-native'

import { NewsCard } from '@components/NewsCard'
import { theme } from '@theme'
import { CheckedNewsStatusEnum } from '@types'

const Trending = () => {
  const DATA = [
    {
      id: '1',
      title: 'Titulo 1 Lorem Ipsum Lorem Ipsum Lorem Ipsum',
      description:
        'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.',
      status: CheckedNewsStatusEnum.REAL,
      link: 'https://example.com',
      date: new Date().toLocaleDateString(),
    },
    {
      id: '2',
      title: 'Titulo 2',
      description:
        'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.',
      status: CheckedNewsStatusEnum.UNCERTAIN,
      date: new Date().toLocaleDateString(),
    },
    {
      id: '3',
      title: 'Titulo 3',
      description:
        'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.',
      status: CheckedNewsStatusEnum.FAKE,
      link: 'https://example.com',
      date: new Date().toLocaleDateString(),
    },
    {
      id: '4',
      title: 'Titulo 4',
      description:
        'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.',
      status: CheckedNewsStatusEnum.REAL,
      link: 'https://example.com',
      date: new Date().toLocaleDateString(),
    },
    {
      id: '5',
      title: 'Titulo 5',
      description:
        'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.',
      status: CheckedNewsStatusEnum.UNCERTAIN,
      date: new Date().toLocaleDateString(),
    },
    {
      id: '6',
      title: 'Titulo 6',
      description:
        'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.',
      status: CheckedNewsStatusEnum.FAKE,
      link: 'https://example.com',
      date: new Date().toLocaleDateString(),
    },
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        style={styles.newsContainer}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NewsCard item={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '55%',
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
    marginTop: theme.spacing20,
  },
})

export default Trending
