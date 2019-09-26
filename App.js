import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Font from 'expo-font';

// import DrawerNavigator from './navigation/DrawerNavigator';
import MainNavigator from './navigation/MainNavigator';

export default function App() {
  const [apiState, setApiState] = useState({
    bjelasnicaData: null,
    jahorinaData: null,
  });
  const [fontState, setFontState] = useState({
    fontLoading: true,
  });

  useEffect(() => {
    fetchData();
    Font.loadAsync({
      RobotoCondensed: require('./assets/fonts/RobotoCondensed-Regular.ttf'),
      RobotoCondensedBold: require('./assets/fonts/RobotoCondensed-Bold.ttf'),
      Dosis: require('./assets/fonts/Dosis-Light.ttf'),
    }).then(() => setFontState({ fontLoading: false }));
  }, []);

  const fetchData = async () => {
    const apiBjelasnica =
      'https://api.darksky.net/forecast/32b96641b564729e696d75a7b98afd2e/43.7042,18.2567?exclude=minutely,alerts,flags&units=si';
    const apiJahorina =
      'https://api.darksky.net/forecast/32b96641b564729e696d75a7b98afd2e/43.7202,18.5617?exclude=minutely,alerts,flags&units=si';
    // const bjelasnicaData = await axios.get(apiBjelasnica);
    // const jahorinaData = await axios.get(apiJahorina);
    // setApiState({ bjelasnicaData: bjelasnicaData.data, jahorinaData: jahorinaData.data });
  };

  const { bjelasnicaData, jahorinaData } = apiState;
  return (
    !fontState.fontLoading && (
      <MainNavigator screenProps={{ bjelasnicaData, jahorinaData, fetchData }} />
    )
  );
}
