import { View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Feather } from '@expo/vector-icons'
import { Education } from '@screens/Education'
import { Explore } from '@screens/Explore'
import { Home } from '@screens/Home'
import { Settings } from '@screens/Settings'
import { theme } from '@theme'
import { AppParamsList } from '@types'

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
            else if (route.name === 'Education') iconName = 'edit-2'
            else if (route.name === 'Explore') iconName = 'archive'
            else if (route.name === 'Settings') iconName = 'settings'

            return <Feather name={iconName} size={22} color={color} />
          },
          tabBarActiveTintColor: theme.colors.white,
          tabBarInactiveTintColor: theme.colors.gray,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            borderRadius: 32,
            width: theme.screen_width - 40,
            height: 64,
            backgroundColor: theme.colors.black,
            bottom: 20,
          },
          tabBarItemStyle: {
            height: 64,
          },
        })}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Education" component={Education} />
        <Screen name="Explore" component={Explore} />
        <Screen name="Settings" component={Settings} />
      </Navigator>
    </View>
  )
}

export { AppRoutes }
