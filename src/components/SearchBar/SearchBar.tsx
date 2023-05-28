import { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { theme } from '@theme'

interface SearchBarProps {
  placeholder?: string
}

const SearchBar = ({ placeholder }: SearchBarProps) => {
  const [value, setValue] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder ?? 'Digite o link ou texto da notícia'}
        placeholderTextColor="#9E9E9E"
        style={styles.inputText}
        onChangeText={(text) => setValue(text)}
        value={value}
      ></TextInput>
      <Feather name="search" size={20} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '8%',
    backgroundColor: '#F4F4F4',
    flexDirection: 'row',
    marginTop: '8%',
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 16,
  },
  inputText: {
    fontSize: 16,
    fontFamily: theme.fonts.InterRegular,
    width: '80%',
  },
})

export default SearchBar
