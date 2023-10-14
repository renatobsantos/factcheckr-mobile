import { createStackNavigator } from '@react-navigation/stack'

import Login from '@screens/Login/Login'
import { Profile } from '@screens/Profile'
import { ProfileParamsList } from '@types'

const Stack = createStackNavigator<ProfileParamsList>()

export function ProfileStack() {
  const { Navigator, Screen } = Stack

  return (
    <Navigator>
      <Screen name="Profile" component={Profile} options={{ header: () => null }} />

      <Screen name="Login" component={Login} options={{ header: () => null }} />
    </Navigator>
  )
}
