import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { NewsCard } from '@components/NewsCard'
import { Feather } from '@expo/vector-icons'
import { theme } from '@theme'
import { CheckedNewsStatusEnum } from '@types'

const Trending = () => {
  const [isDown, setIsDown] = useState(true)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setIsDown(!isDown)}
        activeOpacity={0.7}
      >
        <View style={{ flexDirection: 'row' }}>
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
        <View style={styles.newsContainer}>
          <NewsCard
            title={'Titulo'}
            status={CheckedNewsStatusEnum.REAL}
            link={'https://example.com'}
            date={'25/05/2023'}
          />
          <NewsCard title={'Titulo'} status={CheckedNewsStatusEnum.UNCERTAIN} date={'25/05/2023'} />
          <NewsCard title={'Titulo'} status={CheckedNewsStatusEnum.FAKE} date={'25/05/2023'} />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '60%',
    marginTop: '7%',
    alignItems: 'center',
    borderBottomEndRadius: 16,
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
