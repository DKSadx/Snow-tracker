import React from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export default function Details(props) {
  const { navigate } = props.navigation;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Text</Text>
      <Button title="back" onPress={() => navigate('HourlyWeather')} />
    </SafeAreaView>
  );
}

Details.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: '#f00',
    color: '#000',
  },
});
