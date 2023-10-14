import { StyleSheet, TextInput, View } from 'react-native'

import { useHomeStore } from '@store/HomeStore'
import { theme } from '@theme'

interface TextFormProps {}

const TextForm = ({}: TextFormProps) => {
  const { titleText, setTitleText, descriptionText, setDescriptionText } = useHomeStore()
  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholder="Digite o titulo da notícia"
          placeholderTextColor="#9E9E9E"
          style={styles.inputText}
          onChangeText={(text) => setTitleText(text)}
          value={titleText}
        ></TextInput>
      </View>

      <View style={[styles.container, styles.descriptionContainer]}>
        <TextInput
          placeholder="Digite o texto da notícia"
          placeholderTextColor="#9E9E9E"
          style={styles.inputText}
          onChangeText={(text) => setDescriptionText(text)}
          value={descriptionText}
        ></TextInput>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: theme.spacing64,
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    marginTop: theme.spacing20,
    paddingHorizontal: theme.spacing20,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: theme.spacing32,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  inputText: {
    fontSize: 16,
    fontFamily: theme.fonts.InterRegular,
    width: '80%',
  },
  descriptionContainer: {
    marginTop: theme.spacing10,
    height: theme.spacing64 + theme.spacing64,
    alignItems: 'flex-start',
    paddingTop: theme.spacing20,
  },
})

export default TextForm
