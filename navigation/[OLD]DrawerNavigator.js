//! This is just for backup

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Drawer from '../screens/Drawer';
import MainNavigator from './MainNavigator';

const DrawerNavigator = createDrawerNavigator(
  {
    Main: MainNavigator,
  },
  {
    drawerWidth: '60%',
    contentComponent: Drawer,
  },
);

export default createAppContainer(DrawerNavigator);
