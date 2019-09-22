// React-native version 0.59.8
// This is a known issue with react native. Dynamic paths for images are NOT supported
// To bypass that every path must be hardcoded and with switch(or if/else) choose which image to render
// https://stackoverflow.com/questions/30854232/react-native-image-require-module-using-dynamic-names
// https://github.com/facebook/react-native/issues/2481

import React from 'react';
import { Image } from 'react-native';

export default function CustomImage(props) {
  const { styles, icon } = props;
  let iconPath = null;
  switch (icon) {
    case 'clear-day':
      iconPath = require('../../assets/icons/png/clear-day.png');
      break;
    case 'clear-night':
      iconPath = require('../../assets/icons/png/clear-night.png');
      break;
    case 'rain':
      iconPath = require('../../assets/icons/png/rain.png');
      break;
    case 'snow':
      iconPath = require('../../assets/icons/png/snow.png');
      break;
    case 'sleet':
      iconPath = require('../../assets/icons/png/sleet.png');
      break;
    case 'wind':
      iconPath = require('../../assets/icons/png/wind.png');
      break;
    case 'fog':
      iconPath = require('../../assets/icons/png/fog.png');
      break;
    case 'cloudy':
      iconPath = require('../../assets/icons/png/cloudy.png');
      break;
    case 'partly-cloudy-day':
      iconPath = require('../../assets/icons/png/partly-cloudy-day.png');
      break;
    case 'partly-cloudy-night':
      iconPath = require('../../assets/icons/png/partly-cloudy-night.png');
      break;
    case 'hail':
      iconPath = require('../../assets/icons/png/hail.png');
      break;
    case 'thunderstorm':
      iconPath = require('../../assets/icons/png/thunderstorm.png');
      break;
    case 'tornado':
      iconPath = require('../../assets/icons/png/tornado.png');
      break;
    default:
      return;
  }
  return <>{iconPath && <Image style={{ ...props.styles }} source={iconPath} />}</>;
}
