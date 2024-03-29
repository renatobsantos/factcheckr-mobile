import { View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Feather } from '@expo/vector-icons'
import { Education } from '@screens/Education'
import { Explore } from '@screens/Explore'
import { Home } from '@screens/Home'
import { theme } from '@theme'
import { AppParamsList } from '@types'

import { ProfileStack } from './profile.routes'

const TabStack = createBottomTabNavigator<AppParamsList>()

const AppRoutes = () => {
  const { Navigator, Screen } = TabStack

  return (
    <View style={theme.styles.container}>
      <Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName: keyof typeof Feather.glyphMap = 'feather'

            if (route.name === 'Home') iconName = 'home'
            else if (route.name === 'Education') iconName = 'book-open'
            else if (route.name === 'Explore') iconName = 'compass'
            else if (route.name === 'ProfileStack') iconName = 'user'

            return <Feather name={iconName} size={22} color={color} />
          },
          tabBarActiveTintColor: theme.colors.black,
          tabBarInactiveTintColor: theme.colors.gray,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            width: theme.screenWidth,
            height: theme.spacing64,
            backgroundColor: theme.colors.white,
          },
          tabBarItemStyle: {
            height: 64,
          },
        })}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Education" component={Education} />
        <Screen name="Explore" component={Explore} />
        <Screen name="ProfileStack" component={ProfileStack} />
      </Navigator>
    </View>
  )
}

export { AppRoutes }
