import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { zoomIn } from 'react-navigation-transitions';

import HourlyWeather from '../screens/Modals/HourlyWeather';
import Details from '../screens/Modals/Details';

const ModalNavigator = createStackNavigator(
  {
    HourlyWeather: { screen: HourlyWeather },
    Details: { screen: Details },
  },
  {
    transparentCard: true,
    transitionConfig: () => zoomIn(300),
  },
);

export default createAppContainer(ModalNavigator);
