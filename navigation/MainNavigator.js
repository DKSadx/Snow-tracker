import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromRight } from 'react-navigation-transitions';

import MainScreen from '../screens/MainScreen';
import RightScreen from '../screens/RightScreen';

const MainNavigator = createStackNavigator(
  {
    MainScreen: { screen: MainScreen },
    RightScreen: { screen: RightScreen },
  },
  {
    transitionConfig: () => fromRight(300),
  },
);

export default createAppContainer(MainNavigator);
