import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Drawer from '../screens/Drawer';

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

const DrawerNavigator = createDrawerNavigator(
  {
    MainNavigator,
  },
  {
    drawerWidth: '100%',
    contentComponent: Drawer,
    drawerBackgroundColor: '#0000',
  },
);

export default createAppContainer(DrawerNavigator);
