import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import MainScreen from '../screens/MainScreen';
import RightScreen from '../screens/RightScreen';

const MainNavigator = createMaterialTopTabNavigator(
  {
    MainScreen: { screen: MainScreen },
    RightScreen: { screen: RightScreen },
  },
  {
    tabBarComponent: null,
  },
);

export default createAppContainer(MainNavigator);
