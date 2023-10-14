import { FlatList, StyleSheet, View } from 'react-native'

import { NewsCard } from '@components/NewsCard'
import { useExploreStore } from '@store/ExploreStore'
import { useNewsStore } from '@store/NewsStore'
import { theme } from '@theme'

const Trending = () => {
  const { trendingNews } = useNewsStore()
  const { searchText } = useExploreStore()

  return (
    <View style={styles.container}>
      <FlatList
        data={trendingNews.filter((news) =>
          news.title.toLowerCase().includes(searchText.toLowerCase())
        )}
        style={styles.newsContainer}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NewsCard
            id={item.id}
            title={item.title}
            description={item.description}
            status={item.status}
            link={item.link}
            date={item.date}
            isTrending={item.isTrending}
          />
        )}
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
