import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import CustomImage from '../CustomImage/CustomImage';
import { getSummary } from '../../utils/functions';

export default function CurrentWeather(props) {
  const { temperature, icon } = props.data.currently;
  const { name } = props;
  const summary = getSummary(icon);
  return (
    <View style={styles.currentWeather}>
      <View style={styles.weatherType}>
        <CustomImage icon={icon} styles={{ width: 30, height: 30, tintColor: '#fff' }} />
        <Text style={styles.currentWeatherText}>{summary}</Text>
      </View>
      <Text style={styles.temperature}>{Math.round(temperature)}°C</Text>
      <Text style={styles.location}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  currentWeather: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 30,
  },
  weatherType: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  currentWeatherText: {
    color: '#fff',
    fontSize: 12,
    textAlignVertical: 'center',
  },
  temperature: {
    color: '#fff',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 50,
    fontFamily: 'RobotoCondensedBold',
  },
  location: {
    color: '#fff',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'RobotoCondensed',
  },
});
