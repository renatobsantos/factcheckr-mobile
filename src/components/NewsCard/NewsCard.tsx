import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { theme } from '@theme'
import { CheckedNewsStatusEnum } from '@types'

interface NewsCardProps {
  item: {
    title: string
    description: string
    status: CheckedNewsStatusEnum
    link?: string
    date: string
  }
}

const NewsCard = ({ item }: NewsCardProps) => {
  const { title, description, status, link, date } = item

  const getColorStatus = () => {
    return status === 'verdadeira'
      ? theme.colors.green
      : status === 'sem certeza'
      ? theme.colors.yellow
      : theme.colors.red
  }

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5}>
      <View style={styles.titleContainer}>
        <Text style={[theme.styles.heading3, { width: '90%' }]}>{title}</Text>
        <Feather name="trending-up" size={24} color={theme.colors.orange} />
      </View>
      <Text style={[theme.styles.bodySm, theme.styles.link]}>{link ?? 'sem link'}</Text>
      <Text style={[theme.styles.bodySm, { width: '90%' }]}>{description}</Text>
      <View style={styles.footerContainer}>
        <Text style={theme.styles.bodySm}>
          Verificada em:{' '}
          <Text style={[theme.styles.bodySm, { fontFamily: theme.fonts.InterMedium }]}>{date}</Text>
        </Text>
        <View style={styles.statusContainer}>
          <Text
            style={{
              color: getColorStatus(),
              textTransform: 'uppercase',
              paddingRight: theme.spacing10,
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
            color={getColorStatus()}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: theme.spacing64 * 3,
    backgroundColor: theme.colors.white,
    borderRadius: theme.spacing32,
    paddingVertical: theme.spacing10,
    paddingHorizontal: theme.spacing20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: theme.spacing10,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    left: 20,
    marginTop: theme.spacing10,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default NewsCard
