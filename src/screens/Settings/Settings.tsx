import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Container } from '@components/Container'
import { Feather } from '@expo/vector-icons'
import { theme } from '@theme'

const Settings = () => {
  return (
    <Container isProfilePage>
      <View style={styles.loginContainer}>
        <TouchableOpacity style={styles.iconContainer} activeOpacity={0.7}>
          <Feather name="user" size={48} color={theme.colors.white} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.loginText}>Log in ou criar conta</Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.cardContainer,
          {
            flexDirection: 'row',
            alignItems: 'center',
            height: 80,
          },
        ]}
      >
        <View style={{ width: '50%' }}>
          <Text style={{ fontSize: 20, fontFamily: theme.fonts.InterRegular }}>-</Text>
          <Text style={{ fontSize: 12, fontFamily: theme.fonts.InterRegular, color: 'gray' }}>
            Notícias Verificadas
          </Text>
        </View>
        <View style={{ width: 1, height: '80%', backgroundColor: '#D9D9D9' }} />
        <View style={{ width: '50%', marginLeft: '3%' }}>
          <Text style={{ fontSize: 24, fontFamily: theme.fonts.InterRegular }}>-</Text>
          <Text style={{ fontSize: 12, fontFamily: theme.fonts.InterRegular, color: 'gray' }}>
            Notícias Falsas Verificadas
          </Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%' }}>
            <Feather name="file-text" size={24} color={theme.colors.black} />
            <Text style={{ fontSize: 16, fontFamily: theme.fonts.InterRegular, paddingLeft: '3%' }}>
              Suas pesquisas
            </Text>
          </View>
          <Feather name="chevron-right" size={24} color={theme.colors.black} />
        </TouchableOpacity>
        <View style={{ width: '100%', height: 1, backgroundColor: '#D9D9D9' }} />
        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%' }}>
            <Feather name="moon" size={24} color={theme.colors.black} />
            <Text style={{ fontSize: 16, fontFamily: theme.fonts.InterRegular, paddingLeft: '3%' }}>
              Aparências
            </Text>
          </View>
          <Feather name="chevron-right" size={24} color={theme.colors.black} />
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%' }}>
            <Feather name="info" size={24} color={theme.colors.black} />
            <Text style={{ fontSize: 16, fontFamily: theme.fonts.InterRegular, paddingLeft: '3%' }}>
              Termos de Serviço
            </Text>
          </View>
          <Feather name="chevron-right" size={24} color={theme.colors.black} />
        </TouchableOpacity>
        <View style={{ width: '100%', height: 1, backgroundColor: '#D9D9D9' }} />
        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%' }}>
            <Feather name="lock" size={24} color={theme.colors.black} />
            <Text style={{ fontSize: 16, fontFamily: theme.fonts.InterRegular, paddingLeft: '3%' }}>
              Política e Privacidade
            </Text>
          </View>
          <Feather name="chevron-right" size={24} color={theme.colors.black} />
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%' }}>
            <Feather name="log-out" size={24} color="red" />
            <Text
              style={{
                fontSize: 16,
                fontFamily: theme.fonts.InterRegular,
                paddingLeft: '3%',
                color: 'red',
              }}
            >
              Sair
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  loginContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: theme.colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '5%',
  },
  loginText: {
    fontSize: 20,
    fontFamily: theme.fonts.PoppinsMedium,
  },
  cardContainer: {
    width: '100%',
    borderRadius: 16,
    backgroundColor: theme.colors.white,
    marginTop: '5%',
    paddingHorizontal: '3%',
    borderWidth: 0.5,
  },
  card: {
    flexDirection: 'row',
    marginVertical: '3%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export default Settings
