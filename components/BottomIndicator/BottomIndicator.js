import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BottomIndicator() {
  return (
    <View style={styles.bottomIndicator}>
      <View>
        <Text style={styles.bottomText}>Jahorina</Text>
      </View>
      <View style={styles.bottomIcon}>
        <Ionicons color="#fff" size={20} name="ios-arrow-round-forward" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '8%',
  },
  bottomText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Dosis',
  },
  bottomIcon: {
    paddingLeft: '5%',
  },
});
