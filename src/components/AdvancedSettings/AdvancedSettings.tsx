import { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { ModelCard } from '@components/ModelCard'
import { Feather } from '@expo/vector-icons'
import { useHomeStore } from '@store/HomeStore'
import { useModelStore } from '@store/ModelStore'
import { theme } from '@theme'

const AdvancedSettings = () => {
  const { models } = useModelStore()
  const { activeTab } = useHomeStore()
  const [isDown, setIsDown] = useState(true)

  return (
    <View style={[styles.container, { height: activeTab === 'Link' ? '41%' : '22.5%' }]}>
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
          data={models}
          style={styles.cardContainer}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ModelCard id={item.id} title={item.title} description={item.description} />
          )}
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
