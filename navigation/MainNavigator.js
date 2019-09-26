import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';

import RightScreen from '../screens/RightScreen';
import DrawerNavigator from './DrawerNavigator';

const MainNavigator = createDrawerNavigator(
  {
    MainScreen: DrawerNavigator,
  },
  {
    getCustomActionCreators: () => {
      return {
        toggleRightDrawer: () => DrawerActions.toggleDrawer(),
      };
    },
    drawerType: 'slide',
    drawerPosition: 'right',
    drawerWidth: '100%',
    edgeWidth: 300,
    contentComponent: RightScreen,
  },
);

export default createAppContainer(MainNavigator);
