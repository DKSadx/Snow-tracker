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
    transitionConfig: () => zoomIn(300),
    cardStyle: {
      backgroundColor: '#151E3F',
    },
  },
);

export default createAppContainer(ModalNavigator);
