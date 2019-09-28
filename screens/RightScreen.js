import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';

import Header from '../components/Header/Header';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import SkiConditions from '../components/SkiConditions/SkiConditions';
import DailyWeather from '../components/DailyWeather/DailyWeather';
import BottomIndicator from '../components/BottomIndicator/BottomIndicator';
import Spinner from '../components/Spinner/Spinner';
// import data from '../data/jahorina.json';

export default function MainScreen(props) {
  const data = props.screenProps.jahorinaData;
  const { fetchData } = props.screenProps;
  const { navigation } = props;
  return (
    <ImageBackground source={require('../assets/images/3.jpg')} style={styles.imageBackground}>
      {data ? (
        <View style={styles.mainScreen}>
          <Header name="Jahorina" navigation={navigation} fetchData={fetchData} />
          <CurrentWeather name="Jahorina" data={data} />
          <SkiConditions />
          <DailyWeather data={data} />
          <BottomIndicator name="Bjelašnica" direction="back" navigation={navigation} />
        </View>
      ) : (
        <Spinner containerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} />
      )}
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
