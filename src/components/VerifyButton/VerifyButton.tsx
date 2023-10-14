import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { useHomeStore } from '@store/HomeStore'
import { useModelStore } from '@store/ModelStore'
import { theme } from '@theme'
import { isValidText, isValidUrl } from '@utils'

const VerifyButton = () => {
  const { addedModels } = useModelStore()
  const { activeTab, linkText, titleText, descriptionText } = useHomeStore()

  const shouldEnableButton = (): boolean => {
    if (addedModels.length !== 0)
      if (activeTab === 'Link') {
        return isValidUrl(linkText)
      } else if (activeTab === 'Text') {
        return isValidText(descriptionText) && titleText.length > 4
      }

    return false
  }

  return (
    <TouchableOpacity
      style={[styles.container, { opacity: shouldEnableButton() ? 1 : 0.5 }]}
      activeOpacity={0.8}
      disabled={shouldEnableButton()}
    >
      <Text style={[theme.styles.heading1, { color: theme.colors.white }]}>Verificar</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '60%',
    height: 54,
    backgroundColor: theme.colors.blue,
    borderRadius: theme.spacing32,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: theme.spacing32,
  },
})

export default VerifyButton
