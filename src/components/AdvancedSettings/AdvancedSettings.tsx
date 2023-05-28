import { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { ModelCard } from '@components/ModelCard'
import { Feather } from '@expo/vector-icons'
import { theme } from '@theme'

const AdvancedSettings = () => {
  const [isDown, setIsDown] = useState(true)

  const DATA = [
    {
      id: '1',
      title: 'Modelo 1',
      description: 'Lorem Ipsum',
    },
    {
      id: '2',
      title: 'Modelo 2',
      description: 'Lorem Ipsum',
    },
    {
      id: '3',
      title: 'Modelo 3',
      description: 'Lorem Ipsum',
    },
    {
      id: '4',
      title: 'Modelo 4',
      description: 'Lorem Ipsum',
    },
  ]
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setIsDown(!isDown)}
        activeOpacity={0.7}
      >
        <Text style={theme.styles.heading2}>Configurações Avançadas</Text>
        <Feather name={isDown ? 'chevron-down' : 'chevron-up'} size={28} />
      </TouchableOpacity>

      {isDown && (
        <FlatList
          data={DATA}
          numColumns={2}
          style={styles.cardContainer}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ModelCard title={item.title} description={item.description} />}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '45%',
    marginTop: '7%',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: '100%',
    height: '55%',
    marginTop: '7%',
  },
})
export default AdvancedSettings
