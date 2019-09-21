import React from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export default function HourlyWeather(props) {
  const { navigate } = props.navigation;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Text</Text>
      <Button title="details" onPress={() => navigate('Details')} />
    </SafeAreaView>
  );
}

HourlyWeather.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    backgroundColor: '#000',
  },
});
