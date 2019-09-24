import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { textStyles } from '../../utils/textStyles';

export default function SkiConditions(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Ski conditions: <Text style={textStyles.bold}>Bad</Text>
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
    color: 'red',
    textAlign: 'center',
  },
});
