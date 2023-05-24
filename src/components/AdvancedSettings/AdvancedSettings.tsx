import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Card } from '@components/Card'
import { Feather } from '@expo/vector-icons'
import { theme } from '@theme'

const AdvancedSettings = () => {
  const [isDown, setIsDown] = useState(true)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setIsDown(!isDown)}
        activeOpacity={0.7}
      >
        <Text style={theme.styles.heading2}>Configurações Avançadas</Text>
        {isDown ? (
          <Feather name="chevron-down" size={28} />
        ) : (
          <Feather name="chevron-up" size={28} />
        )}
      </TouchableOpacity>

      {isDown && (
        <View style={styles.cardContainer}>
          <Card key="1" title="Modelo 1" description="Lorem ipsum" />
          <Card key="2" title="Modelo 2" description="Lorem ipsum" />
          <Card key="3" title="Modelo 3" description="Lorem ipsum" />
          <Card key="4" title="Modelo 4" description="Lorem ipsum" />
        </View>
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
    marginTop: '5%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
export default AdvancedSettings
