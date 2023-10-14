import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { useModelStore } from '@store/ModelStore'
import { theme } from '@theme'
import { ModelCardProps } from '@types'

const ModelCard = ({ id, title, description }: ModelCardProps) => {
  const { addModel, removeModel } = useModelStore()

  const [isModelAdded, setIsModelAdded] = useState(false)
  const [isInfoPressed, setIsInfoPressed] = useState(false)

  const onPress = () => {
    isModelAdded ? removeModel(id) : addModel({ id, title, description })
    setIsModelAdded(!isModelAdded)
  }
  const onInfoPress = () => setIsInfoPressed(!isInfoPressed)

  return (
    <>
      <View
        style={[
          styles.container,
          {
            marginBottom: isInfoPressed ? -theme.spacing32 : theme.spacing10,
          },
        ]}
      >
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={[styles.buttonContainer, { marginRight: theme.spacing10 }]}
            activeOpacity={0.7}
            onPress={onInfoPress}
          >
            <Feather name="info" size={theme.spacing20} color={theme.colors.black} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, { backgroundColor: theme.colors.black }]}
            activeOpacity={0.7}
            onPress={onPress}
          >
            <Feather
              name={isModelAdded ? 'x' : 'plus'}
              size={theme.spacing20}
              color={isModelAdded ? theme.colors.red : theme.colors.white}
            />
          </TouchableOpacity>
        </View>
      </View>
      {isInfoPressed && (
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{description}</Text>
          <Text
            style={[
              styles.descriptionText,
              {
                position: 'absolute',
                alignSelf: 'center',
                bottom: theme.spacing10,
                color: '#808080',
              },
            ]}
          >
            Pelo menos um modelo deve ser utilizado
          </Text>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: theme.spacing64,
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: theme.spacing32,
    paddingHorizontal: theme.spacing20,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: theme.fonts.PoppinsMedium,
    color: theme.colors.black,
  },
  buttonContainer: {
    width: theme.spacing28,
    height: theme.spacing28,
    borderRadius: theme.spacing28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.border,
  },
  descriptionContainer: {
    width: '100%',
    zIndex: -1,
    height: theme.spacing64 + theme.spacing64,
    borderBottomStartRadius: theme.spacing32,
    borderBottomRightRadius: theme.spacing32,
    backgroundColor: theme.colors.border,
    fontFamily: theme.fonts.InterLight,
    marginBottom: theme.spacing10,
    paddingTop: theme.spacing32 + theme.spacing10,
    paddingHorizontal: 16,
  },
  descriptionText: {
    fontSize: 14,
    fontFamily: theme.fonts.InterRegular,
  },
})

export default ModelCard
