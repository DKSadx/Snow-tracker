import React from 'react';
import { StyleSheet, ImageBackground, View, Text } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import moment from 'moment';

import Header from '../components/Header/Header';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import DailyWeather from '../components/DailyWeather/DailyWeather';
import BottomIndicator from '../components/BottomIndicator/BottomIndicator';
import data from '../data/jahorina.json';

export default function MainScreen(props) {
  const { navigate } = props.navigation;
  return (
    <GestureRecognizer onSwipeRight={() => navigate('MainScreen')}>
      <ImageBackground source={require('../assets/images/3.jpg')} style={styles.imageBackground}>
        <View style={styles.mainScreen}>
          <Header name="Jahorina" navigation={props.navigation} />
          <CurrentWeather name="Jahorina" data={data} />
          <DailyWeather data={data} />
          <BottomIndicator name="Bjelašnica" direction="back" navigation={props.navigation} />
        </View>
      </ImageBackground>
    </GestureRecognizer>
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
