import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { theme } from '@theme'

interface ModelCardProps {
  title: string
  description: string
}

const ModelCard = ({ title, description }: ModelCardProps) => {
  const [buttonText, setButtonText] = useState<'Adicionar' | 'Remover'>('Adicionar')

  const onPress = () => {
    if (buttonText === 'Adicionar') setButtonText('Remover')
    else setButtonText('Adicionar')
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
        <Feather name="info" size={22} color={theme.colors.white} style={styles.headerIcon} />
      </View>

      <Text style={styles.descriptionText}>{description}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onPress}>
          <Text
            style={[
              styles.buttonText,
              { color: buttonText === 'Remover' ? 'red' : theme.colors.black },
            ]}
          >
            {buttonText}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '48%',
    height: 170,
    backgroundColor: theme.colors.black,
    borderRadius: 16,
    marginBottom: '2%',
    marginHorizontal: '1%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: '7.5%',
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: theme.fonts.InterRegular,
    color: theme.colors.white,
  },
  headerIcon: {
    position: 'absolute',
    right: '10%',
  },
  descriptionText: {
    marginTop: '5%',
    marginLeft: '10%',
    color: theme.colors.white,
    fontFamily: theme.fonts.InterLight,
    fontSize: 12,
  },
  buttonContainer: {
    width: '100%',
    height: '20%',
    position: 'absolute',
    bottom: '5%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    height: '100%',
    backgroundColor: theme.colors.white,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  buttonText: {
    fontFamily: theme.fonts.InterMedium,
    fontSize: 12,
  },
})

export default ModelCard
