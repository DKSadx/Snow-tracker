import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Font from 'expo-font';
import { StyleSheet, View, ImageBackground } from 'react-native';

import MainScreen from './screens/MainScreen';

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
  return (
    !state.fontLoading && (
      <ImageBackground source={require('./assets/images/1.jpg')} style={styles.imageBackground}>
        <View style={styles.app}>
          <MainScreen />
        </View>
      </ImageBackground>
    )
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  app: {
    height: '100%',
    width: '100%',
  },
});
