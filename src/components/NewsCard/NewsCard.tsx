import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { theme } from '@theme'
import { CheckedNewsStatusEnum } from '@types'

interface NewsCardProps {
  title: string
  status: CheckedNewsStatusEnum
  link?: string
  date: string
}

const NewsCard = ({ title, status, link, date }: NewsCardProps) => {
  const getColorStatus = (real: string, uncertain: string, fake: string) => {
    return status === 'verdadeira' ? real : status === 'sem certeza' ? uncertain : fake
  }

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <View style={styles.titleContainer}>
        <Text style={[theme.styles.heading2, { color: theme.colors.white }]}>{title}</Text>
        <View style={styles.statusContainer}>
          <Text
            style={{
              color: getColorStatus(theme.colors.green, theme.colors.yellow, theme.colors.red),
              textTransform: 'uppercase',
              paddingRight: status === 'falsa' ? '5%' : '4%',
            }}
          >
            {status}
          </Text>
          <Feather
            name={
              status === 'verdadeira'
                ? 'check-circle'
                : status === 'sem certeza'
                ? 'activity'
                : 'x-circle'
            }
            size={24}
            color={getColorStatus(theme.colors.green, theme.colors.yellow, theme.colors.red)}
          />
        </View>
      </View>
      <Text
        style={[
          theme.styles.bodySm,
          {
            color: '#5A88FF',
            marginVertical: '3%',
            textDecorationLine: 'underline',
          },
        ]}
      >
        {link ?? 'Sem link'}
      </Text>
      <Text style={[theme.styles.bodySm, { color: theme.colors.white }]}>
        Verificada em:{' '}
        <Text
          style={[
            theme.styles.bodySm,
            { fontFamily: theme.fonts.InterMedium, color: theme.colors.white },
          ]}
        >
          {date}
        </Text>
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: theme.colors.black,
    borderRadius: 16,
    padding: '4%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: '2%',
  },
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default NewsCard
