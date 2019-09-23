import React from 'react';
import { StyleSheet, ImageBackground, View, Text, Button } from 'react-native';
import moment from 'moment';

import Header from '../components/Header/Header';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import DailyWeather from '../components/DailyWeather/DailyWeather';
import BottomIndicator from '../components/BottomIndicator/BottomIndicator';
import data from '../data/bjelasnica.json';

export default function MainScreen(props) {
  const { navigate } = props.navigation;
  return (
    <ImageBackground source={require('../assets/images/1.jpg')} style={styles.imageBackground}>
      <View style={styles.mainScreen}>
        <Header name="Bjelašnica" navigation={props.navigation} />
        <CurrentWeather name="Bjelašnica" data={data} />
        <DailyWeather data={data} />
        <BottomIndicator name="Jahorina" direction="forward" navigation={props.navigation} />
      </View>
    </ImageBackground>
  );
}

MainScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  mainScreen: {
    height: '100%',
    width: '100%',
  },
});
