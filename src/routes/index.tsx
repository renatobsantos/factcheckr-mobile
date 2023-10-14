import { NavigationContainer } from '@react-navigation/native'

import { Providers } from '../redux/provider'
import { AppRoutes } from './app.routes'

const Routes = () => {
  return (
    <NavigationContainer>
      <Providers>
        <AppRoutes />
      </Providers>
    </NavigationContainer>
  )
}

export { Routes }
