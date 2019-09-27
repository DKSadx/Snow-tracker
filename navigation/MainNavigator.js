import { createAppContainer } from 'react-navigation';

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import DrawerNavigator from './DrawerNavigator';

const MainNavigator = createMaterialTopTabNavigator(
  {
    MainScreen: DrawerNavigator,
  },
  {
    tabBarComponent: null,
  },
);

export default createAppContainer(MainNavigator);
