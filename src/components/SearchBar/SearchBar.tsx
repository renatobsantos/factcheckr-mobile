import { StyleSheet, TextInput, View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { useExploreStore } from '@store/ExploreStore'
import { useHomeStore } from '@store/HomeStore'
import { theme } from '@theme'

interface SearchBarProps {
  placeholder?: string
  isHomePage?: boolean
}

const SearchBar = ({ placeholder, isHomePage = true }: SearchBarProps) => {
  const { linkText, setLinkText } = useHomeStore()
  const { searchText, setSearchText } = useExploreStore()

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder ?? 'Digite o link da notícia'}
        placeholderTextColor="#9E9E9E"
        style={styles.inputText}
        onChangeText={(text) => {
          isHomePage ? setLinkText(text) : setSearchText(text)
        }}
        value={isHomePage ? linkText : searchText}
      />
      <Feather name="search" size={20} />
    </View>
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

export default SearchBar
