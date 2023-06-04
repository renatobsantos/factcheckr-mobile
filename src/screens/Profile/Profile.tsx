import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Container } from '@components/Container'
import { Feather } from '@expo/vector-icons'
import { theme } from '@theme'

const Profile = () => {
  return (
    <Container>
      <View style={styles.loginContainer}>
        <TouchableOpacity style={styles.iconContainer} activeOpacity={0.5}>
          <Feather name="user" size={40} color={theme.colors.white} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.loginText}>Log in ou criar conta</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.cardContainer, styles.counterContainer]}>
        <View style={{ width: '50%', paddingLeft: theme.spacing20 }}>
          <Text style={styles.numberText}>-</Text>
          <Text style={styles.labelText}>Notícias{'\n'}Verificadas</Text>
        </View>

        <View style={styles.verticalLine} />

        <View style={{ width: '50%', paddingLeft: theme.spacing20 }}>
          <Text style={styles.numberText}>-</Text>
          <Text style={styles.labelText}>Notícias{'\n'}Falsas Verificadas</Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} activeOpacity={0.5}>
          <View style={styles.cardTextContainer}>
            <Feather name="moon" size={24} color={theme.colors.black} />
            <Text style={styles.cardText}>Aparências</Text>
          </View>
          <Feather name="chevron-right" size={20} color={theme.colors.black} />
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} activeOpacity={0.5}>
          <View style={styles.cardTextContainer}>
            <Feather name="file-text" size={24} color={theme.colors.black} />
            <Text style={styles.cardText}>Termos de Serviço</Text>
          </View>
          <Feather name="chevron-right" size={20} color={theme.colors.black} />
        </TouchableOpacity>

        <View style={styles.horizontalLine} />
        <TouchableOpacity style={styles.card} activeOpacity={0.5}>
          <View style={styles.cardTextContainer}>
            <Feather name="lock" size={24} color={theme.colors.black} />
            <Text style={styles.cardText}>Política e Privacidade</Text>
          </View>
          <Feather name="chevron-right" size={20} color={theme.colors.black} />
        </TouchableOpacity>

        <View style={styles.horizontalLine} />
        <TouchableOpacity style={styles.card} activeOpacity={0.5}>
          <View style={styles.cardTextContainer}>
            <Feather name="info" size={24} color={theme.colors.black} />
            <Text style={styles.cardText}>
              Sobre o{' '}
              <Text style={[theme.styles.headingLogo, { fontSize: 16 }]}>
                Fact<Text style={{ color: theme.colors.blue }}>Checkr</Text>
              </Text>
            </Text>
          </View>
          <Feather name="chevron-right" size={20} color={theme.colors.black} />
        </TouchableOpacity>
      </View>

      <View style={[styles.cardContainer, { position: 'absolute', bottom: theme.spacing32 }]}>
        <TouchableOpacity style={styles.card} activeOpacity={0.5}>
          <View style={styles.cardTextContainer}>
            <Feather name="log-out" size={24} color={theme.colors.red} />
            <Text style={[styles.cardText, { color: theme.colors.red }]}>Sair</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  loginContainer: {
    width: '100%',
    height: theme.spacing64,
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing32,
    borderRadius: theme.spacing32,
    borderWidth: 1,
    borderLeftWidth: 2,
    borderColor: theme.colors.border,
  },
  iconContainer: {
    width: theme.spacing64 - 2,
    height: theme.spacing64 - 2,
    borderRadius: theme.spacing32,
    backgroundColor: theme.colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 20,
    fontFamily: theme.fonts.PoppinsMedium,
    marginLeft: theme.spacing20,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: theme.spacing64 + theme.spacing32,
  },
  verticalLine: {
    width: 1,
    height: '70%',
    backgroundColor: theme.colors.border,
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: theme.colors.border,
  },
  numberText: {
    fontSize: theme.spacing20,
    fontFamily: theme.fonts.InterRegular,
  },
  labelText: {
    fontSize: 13,
    fontFamily: theme.fonts.InterRegular,
    color: theme.colors.gray,
  },
  cardContainer: {
    width: '100%',
    borderRadius: theme.spacing32,
    backgroundColor: theme.colors.white,
    marginTop: theme.spacing24,
    paddingHorizontal: theme.spacing10,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  card: {
    flexDirection: 'row',
    marginVertical: theme.spacing10 + 6,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  cardText: {
    ...theme.styles.bodyMd,
    paddingLeft: theme.spacing10,
  },
})

export default Profile
