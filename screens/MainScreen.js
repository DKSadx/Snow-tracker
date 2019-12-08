import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';

import Header from '../components/Header/Header';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import MountainAltitude from '../components/MountainAltitude/MountainAltitude';
import SkiConditions from '../components/SkiConditions/SkiConditions';
import DailyWeather from '../components/DailyWeather/DailyWeather';
import BottomIndicator from '../components/BottomIndicator/BottomIndicator';
import Spinner from '../components/Spinner/Spinner';
// import data from "../data/bjelasnica.json";

export default function MainScreen(props) {
  const data = props.screenProps.bjelasnicaData;
  const { fetchData, updateData } = props.screenProps;
  const { navigation } = props;

  return (
    <ImageBackground
      source={require('../assets/images/1.jpg')}
      style={styles.imageBackground}
    >
      {data ? (
        <View style={styles.mainScreen}>
          <Header
            name="Bjelašnica"
            navigation={navigation}
            fetchData={fetchData}
          />
          <CurrentWeather name="Bjelašnica" data={data} />
          <View>
            <MountainAltitude
              minAltitude="1266"
              minApi="https://api.darksky.net/forecast/32b96641b564729e696d75a7b98afd2e/43.716461,18.284155?exclude=minutely,alerts,flags&units=si"
              midAltitude="1590"
              midApi="https://api.darksky.net/forecast/32b96641b564729e696d75a7b98afd2e/43.710600,18.269324?exclude=minutely,alerts,flags&units=si"
              maxAltitude="2067"
              maxApi="https://api.darksky.net/forecast/32b96641b564729e696d75a7b98afd2e/43.7042,18.2567?exclude=minutely,alerts,flags&units=si"
              updateData={updateData}
              mountain="bjelasnica"
            />
          </View>
          <SkiConditions data={data} />
          <DailyWeather data={data} />
          <BottomIndicator
            name="Jahorina"
            direction="forward"
            navigation={navigation}
          />
        </View>
      ) : (
        <Spinner
          containerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
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
