import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function CurrentWeather(props) {
  return (
    <View style={styles.currentWeather}>
      <View style={styles.weatherType}>
        <Image
          source={require('../../assets/icons/png/Sun.png')}
          style={{ width: 25, height: 25, tintColor: '#fff' }}
        />
        <Text style={styles.currentWeatherText}>Sunny</Text>
      </View>
      <Text style={styles.temperature}>22°C</Text>
      <Text style={styles.location}>{props.name}</Text>
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
    marginBottom: '15%',
    fontFamily: 'RobotoCondensed',
  },
});
