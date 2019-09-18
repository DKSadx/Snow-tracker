import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Drawer from '../screens/Drawer';
import MainScreen from '../screens/MainScreen';
import RightScreen from '../screens/RightScreen';
import MainNavigator from './MainNavigator';

const DrawerNavigator = createDrawerNavigator(
  {
    Main: MainNavigator,
    Right: RightScreen,
  },
  {
    drawerBackgroundColor: 'rgba(37, 28, 56, 0.8)',
    drawerWidth: '60%',
    contentComponent: Drawer,
  },
);

export default createAppContainer(DrawerNavigator);
