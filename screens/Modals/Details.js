import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, BackHandler } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';

import { calculateWindDirection } from '../../utils/functions';

export default function Details(props) {
  const { navigate } = props.navigation;
  // Physical android back button navigates to HourlyWeather component(previous one) instead of closing modal
  const [backHandlerEvent] = useState({
    cb: () => {
      navigate('HourlyWeather');
      return true;
    },
  });

  useEffect(() => {
    // Adds event listener on mount and removes on unmount
    BackHandler.addEventListener('hardwareBackPress', backHandlerEvent.cb);
    return () => BackHandler.removeEventListener('hardwareBackPress', backHandlerEvent.cb);
  }, []);

  const { day } = props.screenProps;
  const { hourInfo } = props.navigation.state.params;

  const apparentTemperature = `${Math.round(hourInfo.apparentTemperature)}°C`; // H
  const sunriseTime = moment.unix(day.sunriseTime).format('HH:mm'); // D
  const sunsetTime = moment.unix(day.sunsetTime).format('HH:mm'); // D
  const precipProbability = `${Math.round(hourInfo.precipProbability * 100)}%`; // H
  const precipType = hourInfo.precipType; // H
  const temperatureLowTime = moment.unix(day.temperatureLowTime).format('HH:mm'); // D
  const temperatureHighTime = moment.unix(day.temperatureHighTime).format('HH:mm'); // D
  const windSpeed = `${Math.round((hourInfo.windSpeed / 1000) * 360000) / 100}km/h`; // H
  const windGust = `${Math.round((hourInfo.windGust / 1000) * 360000) / 100}km/h`; // H
  const windBearing = calculateWindDirection(hourInfo.windBearing); // H
  const cloudCover = `${Math.round(hourInfo.cloudCover * 100)}%`; // H
  const humidity = `${Math.round(hourInfo.humidity * 100)}%`; // H
  const pressure = `${Math.round(hourInfo.pressure * 100)}Pa`; // H
  const ozone = `${hourInfo.ozone}DU`; // H
  const uvIndex = day.uvIndex;

  const details = [
    'Apparent temperature',
    'Sunrise time',
    'Sunset time',
    'Precipitation probability',
    'Precipitation type',
    'Lowest temperature time',
    'Highest temperature time',
    'Wind speed',
    'Wind gust',
    'Wind bearing',
    'Cloud cover',
    'Humidity',
    'Pressure',
    'Ozone',
    'Uv index',
  ];
  const detailsData = [
    'apparentTemperature',
    'sunriseTime',
    'sunsetTime',
    'precipProbability',
    'precipType',
    'temperatureLowTime',
    'temperatureHighTime',
    'windSpeed',
    'windGust',
    'windBearing',
    'cloudCover',
    'humidity',
    'pressure',
    'ozone',
    'uvIndex',
  ];
  const generateDetails = details.map((details, i) => {
    return (
      // If the data exists, display it
      eval(detailsData[i]) && (
        <View key={i} style={styles.detailsRow}>
          <Text style={styles.detailsRowText}>{details}</Text>
          <Text style={styles.detailsRowText}>{eval(detailsData[i])}</Text>
        </View>
      )
    );
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.arrowLeft} onPress={() => navigate('HourlyWeather')}>
          <AntDesign name="arrowleft" size={40} color="white" />
        </TouchableOpacity>
        <View style={styles.titleView}>
          <Text style={styles.title}>More Details</Text>
        </View>
      </View>
      <View style={{ paddingBottom: '5%' }}>
        <Text style={styles.summary}>{hourInfo.summary}</Text>
      </View>
      {generateDetails}
    </SafeAreaView>
  );
}

Details.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#151E3F',
    height: '100%',
    width: '100%',
  },
  header: {
    position: 'relative',
  },
  arrowLeft: {
    position: 'absolute',
    top: '20%',
    left: '5%',
  },
  titleView: {
    alignSelf: 'center',
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    marginBottom: '5%',
    marginTop: '5%',
    width: '50%',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
  },
  summary: {
    color: '#fff',
    textAlign: 'center',
    paddingBottom: '5%',
    paddingHorizontal: '6%',
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
    paddingVertical: 5,
  },
  detailsRowText: {
    color: '#fff',
  },
});
