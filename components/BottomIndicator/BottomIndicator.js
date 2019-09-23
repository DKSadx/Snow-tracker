import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

export default function BottomIndicator(props) {
  const { navigate } = props.navigation;
  return props.direction === 'forward' ? (
    <GestureRecognizer onSwipeLeft={() => navigate('RightScreen')}>
      <TouchableOpacity style={styles.bottomIndicator} onPress={() => navigate('RightScreen')}>
        <View>
          <Text style={styles.bottomText}>{props.name}</Text>
        </View>
        <View style={styles.bottomIcon}>
          <Ionicons color="#fff" size={20} name={`ios-arrow-round-${props.direction}`} />
        </View>
      </TouchableOpacity>
    </GestureRecognizer>
  ) : (
    <GestureRecognizer onSwipeRight={() => navigate('MainScreen')}>
      <TouchableOpacity style={styles.bottomIndicator} onPress={() => navigate('MainScreen')}>
        <View style={styles.bottomIcon}>
          <Ionicons color="#fff" size={20} name={`ios-arrow-round-${props.direction}`} />
        </View>
        <View>
          <Text style={styles.bottomText}>{props.name}</Text>
        </View>
      </TouchableOpacity>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  bottomIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '8%',
    height: '35%',
  },
  bottomText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Dosis',
    paddingLeft: '5%',
  },
  bottomIcon: {
    paddingLeft: '5%',
  },
});
