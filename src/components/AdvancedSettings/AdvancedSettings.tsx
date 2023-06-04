import { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { ModelCard } from '@components/ModelCard'
import { Feather } from '@expo/vector-icons'
import { theme } from '@theme'

interface AdvancedSettingsProps {
  isLink: boolean
}

const AdvancedSettings = ({ isLink }: AdvancedSettingsProps) => {
  const [isDown, setIsDown] = useState(true)

  const DATA = [
    {
      id: '1',
      title: 'Modelo 1',
      description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
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
    {
      id: '5',
      title: 'Modelo 5',
      description: 'Lorem Ipsum',
    },
  ]
  return (
    <View style={[styles.container, { height: isLink ? '41%' : '22.5%' }]}>
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
          style={styles.cardContainer}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ModelCard item={item} />}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: theme.spacing24,
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
    height: '100%',
    marginTop: theme.spacing20,
  },
})
export default AdvancedSettings
