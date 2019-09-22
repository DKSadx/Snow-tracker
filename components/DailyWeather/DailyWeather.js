import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { BackHandler } from 'react-native';
import moment from 'moment';

import Modal from '../../components/Modal/Modal';
import CustomImage from '../../components/CustomImage/CustomImage';

export default function DailyWeather(props) {
  const [displayModal, setDisplayModal] = useState(false);
  const { data } = props;
  const generateDailyContainers = data.daily.data.map((day, i) => {
    const { time, icon } = day;
    const temperatureMin = Math.round(day.temperatureMin);
    const temperatureMax = Math.round(day.temperatureMax);
    const averageTemperature = Math.round((temperatureMin + temperatureMax) / 2);
    const date = moment.unix(time).format('DD.MM.');
    return (
      <TouchableOpacity key={i} onPress={() => setDisplayModal(true)}>
        <View style={styles.dailyView}>
          <View style={styles.dateView}>
            <Text style={styles.date}>{date}</Text>
          </View>
          <View style={styles.weatherIcon}>
            <CustomImage icon={icon} styles={{ width: 60, height: 60, tintColor: '#fff' }} />
          </View>
          <View style={styles.dailyTemp}>
            <Text style={styles.dailyTempText}>{averageTemperature}°C</Text>
          </View>
          <View style={styles.dailyLimits}>
            <Text style={styles.dailyMax}>
              max: <Text style={styles.textBold}>{temperatureMax}°C</Text>
            </Text>
            <Text style={styles.dailyMin}>
              min: <Text style={styles.textBold}>{temperatureMin}°C</Text>
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  });
  const closeModal = () => setDisplayModal(false);

  return (
    <>
      {displayModal && <Modal closeModal={closeModal} />}
      <View style={styles.dailyContainer}>
        <ScrollView>{data && generateDailyContainers}</ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  dailyContainer: {
    width: '80%',
    height: '50%',
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 5,
  },
  dailyView: {
    flex: 1,
    backgroundColor: 'rgba(5,102,141, 0.5)',
    height: 60,
    marginTop: '2%',
    marginHorizontal: '5%',
    paddingRight: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
  dateView: {
    flex: 1,
    paddingLeft: '4%',
  },
  date: {
    fontFamily: 'RobotoCondensed',
    color: '#fff',
  },
  weatherIcon: {
    flex: 2,
    width: 10,
  },
  dailyTemp: {
    flex: 4,
    paddingLeft: '10%',
  },
  dailyTempText: {
    fontSize: 25,
    color: '#fff',
  },
  dailyMax: {
    paddingBottom: '3%',
    color: '#fff',
    fontFamily: 'RobotoCondensed',
  },
  dailyMin: {
    color: '#fff',
    fontFamily: 'RobotoCondensed',
  },
});
