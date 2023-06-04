import { View } from 'react-native'

import { theme } from '@theme'

const ActiveType = () => {
  return (
    <View
      style={{
        height: 2,
        backgroundColor: theme.colors.blue,
        borderRadius: theme.spacing32,
      }}
    />
  )
}

export default ActiveType
