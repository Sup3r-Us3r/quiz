import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Quiz } from '../screens/Quiz';
import { Finish } from '../screens/Finish';
import { History } from '../screens/History';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="quiz"
        component={Quiz}
      />
      <Screen
        name="history"
        component={History}
      />
      <Screen
        name="finish"
        component={Finish}
      />
    </Navigator>
  )
}