import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { textStyles } from '../../utils/textStyles';

export default function SkiConditions(props) {
  const { currently } = props.data;
  const { temperature, icon, precipIntensity } = currently;
  const windSpeed = Math.round((currently.windSpeed / 1000) * 360000) / 100;
  let score = 0;
  let skiConditions;
  let color;
  // Calculates score depending on the current weather conditions
  if (temperature > 1 || windSpeed > 10 || (icon === 'rain' && precipIntensity > 5)) {
    score = 0;
  } else {
    if (temperature < -4 && temperature > -12) score = score + 2;
    else score = score + 1;
    if (windSpeed < 4) score = score + 2;
    else score = score + 1;
  }
  if (score > 2) {
    skiConditions = 'Good';
    color = '#29cf04';
  } else if (score > 0 && score <= 2) {
    skiConditions = 'Moderate';
    color = 'yellow';
  } else {
    skiConditions = 'Bad';
    color = 'red';
  }

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, color }}>
        Ski conditions: <Text style={textStyles.bold}>{skiConditions}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    marginBottom: '5%',
  },
  text: {
    textAlign: 'center',
  },
});
