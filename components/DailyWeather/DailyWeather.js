import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { BackHandler } from 'react-native';
import moment from 'moment';

import Modal from '../../components/Modal/Modal';
import CustomImage from '../../components/CustomImage/CustomImage';
import { textStyles } from '../../utils/textStyles';

export default function DailyWeather(props) {
  const [modal, setModal] = useState({ show: false });
  const { data } = props;

  const generateDailyContainers = data.daily.data.map((day, i) => {
    const { time, icon } = day;
    const temperatureMin = Math.round(day.temperatureMin);
    const temperatureMax = Math.round(day.temperatureMax);
    const averageTemperature = Math.round((temperatureMin + temperatureMax) / 2);
    const date = moment.unix(time).format('DD.MM.');
    const dateDay = moment.unix(time).format('DD');
    return (
      <TouchableOpacity key={i} onPress={() => setModal({ show: true, dateDay, day })}>
        <View style={styles.dailyView}>
          <View style={styles.dateView}>
            <Text style={styles.date}>{date}</Text>
          </View>
          <View style={styles.weatherIcon}>
            <CustomImage icon={icon} styles={{ width: 38, height: 38, tintColor: '#fff' }} />
          </View>
          <View style={styles.dailyTemp}>
            <Text style={styles.dailyTempText}>{averageTemperature}°C</Text>
          </View>
          <View style={styles.dailyLimits}>
            <Text style={styles.dailyMax}>
              max: <Text style={textStyles.bold}>{temperatureMax}°C</Text>
            </Text>
            <Text style={styles.dailyMin}>
              min: <Text style={textStyles.bold}>{temperatureMin}°C</Text>
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  });

  const closeModal = () => setModal({ show: false });

  return (
    <>
      {modal.show && (
        <Modal data={data} dateDay={modal.dateDay} day={modal.day} closeModal={closeModal} />
      )}
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
    overflow: 'hidden',
  },
  dateView: {
    flex: 0.8,
    paddingLeft: '4%',
  },
  date: {
    fontFamily: 'RobotoCondensed',
    color: '#fff',
  },
  weatherIcon: {
    flex: 3,
    width: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  dailyTemp: {
    flex: 3,
    alignItems: 'flex-start',
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
