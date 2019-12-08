import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function MountainAltitude(props) {
  const {
    minAltitude,
    minApi,
    midAltitude = '',
    midApi = '',
    maxAltitude,
    maxApi,
    updateData,
    mountain,
  } = props;

  const [selectedAltitude, setSelectedAltitude] = useState({
    mountain: '',
    altitude: midAltitude,
    api: '',
    style: { ...styles.text, fontSize: 15, color: 'white' },
  });

  useEffect(() => {
    if (selectedAltitude.api !== '') {
      axios
        .get(selectedAltitude.api)
        .then(weatherData => {
          if (selectedAltitude.mountain === 'bjelasnica') {
            updateData({ bjelasnicaData: weatherData.data });
          } else if (selectedAltitude.mountain === 'jahorina') {
            updateData({ jahorinaData: weatherData.data });
          }
        })
        .catch(err => console.log(err));
    }
  }, [selectedAltitude.altitude]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          setSelectedAltitude({
            mountain,
            altitude: minAltitude,
            api: minApi,
            style: { ...styles.text, fontSize: 15, color: 'white' },
          })
        }
      >
        <Text
          style={
            selectedAltitude.altitude === minAltitude
              ? selectedAltitude.style
              : styles.text
          }
        >{`${minAltitude}m`}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          setSelectedAltitude({
            mountain,
            altitude: midAltitude,
            api: midApi,
            style: { ...styles.text, fontSize: 15, color: 'white' },
          })
        }
      >
        <Text
          style={
            selectedAltitude.altitude === midAltitude
              ? selectedAltitude.style
              : styles.text
          }
        >{`${midAltitude}m`}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          setSelectedAltitude({
            mountain,
            altitude: maxAltitude,
            api: maxApi,
            style: { ...styles.text, fontSize: 15, color: 'white' },
          })
        }
      >
        <Text
          style={
            selectedAltitude.altitude === maxAltitude
              ? selectedAltitude.style
              : styles.text
          }
        >{`${maxAltitude}m`}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignSelf: 'center',
    marginTop: '0.7%',
  },
  text: {
    fontSize: 10,
    color: '#aaaa',
    marginHorizontal: '1%',
  },
});
