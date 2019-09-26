import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';

import Drawer from '../screens/Drawer';
import MainScreen from '../screens/MainScreen';

const DrawerNavigator = createDrawerNavigator(
  {
    Main: MainScreen,
  },
  {
    // Avoids conflict between multiple drawers on same screen
    getCustomActionCreators: (route, stateKey) => {
      return { toggleLeftDrawer: () => DrawerActions.toggleDrawer({ key: stateKey }) };
    },
    drawerWidth: '60%',
    contentComponent: Drawer,
  },
);

export default createAppContainer(DrawerNavigator);
