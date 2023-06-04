import { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

import { theme } from '@theme'

interface TextFormProps {}

const TextForm = ({}: TextFormProps) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholder="Digite o titulo da notícia"
          placeholderTextColor="#9E9E9E"
          style={styles.inputText}
          onChangeText={(text) => setTitle(text)}
          value={title}
        ></TextInput>
      </View>
      <View
        style={[
          styles.container,
          {
            marginTop: theme.spacing10,
            height: theme.spacing64 + theme.spacing64,
            alignItems: 'flex-start',
            paddingTop: theme.spacing20,
          },
        ]}
      >
        <TextInput
          placeholder="Digite o texto da notícia"
          placeholderTextColor="#9E9E9E"
          style={styles.inputText}
          onChangeText={(text) => setDescription(text)}
          value={description}
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
})

export default TextForm
