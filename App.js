import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Font from 'expo-font';
import { StyleSheet, View, ImageBackground } from 'react-native';

import MainNavigator from './navigation/MainNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';

export default function App() {
  const [state, setState] = useState({
    data: '',
    fontLoading: true,
  });

  useEffect(() => {
    // const api =
    //   'https://api.darksky.net/forecast/2b00197b015f9a0c719fc40efb6734d4/43.7042,18.2567?exclude=currently,minutely,alerts,flags&units=si';
    // axios.get(api).then(res => setState({ data: res }));
    Font.loadAsync({
      RobotoCondensed: require('./assets/fonts/RobotoCondensed-Regular.ttf'),
      RobotoCondensedBold: require('./assets/fonts/RobotoCondensed-Bold.ttf'),
      Dosis: require('./assets/fonts/Dosis-Light.ttf'),
    }).then(() => setState({ ...state, fontLoading: false }));
  }, []);

  // data.daily.forEach(x => console.log(x));
  // data.daily.map(x => console.log(x));
  // data.daily.data.forEach(x => console.log(moment.unix(x.time).format('MM/DD/YYYY')));
  // moment.unix(x.time).format('MM/DD/YYYY'))
  // const value = 1568779200;
  // console.log(moment.unix(value).format('MM/DD/YYYY hh:mm:ss'));

  return !state.fontLoading && <DrawerNavigator />;
}
