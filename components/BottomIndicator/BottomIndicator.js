import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BottomIndicator(props) {
  const { navigate } = props.navigation;
  const { name, direction } = props;
  return props.direction === 'forward' ? (
    <TouchableOpacity style={styles.bottomIndicator} onPress={() => navigate('RightScreen')}>
      <View>
        <Text style={styles.bottomText}>{name}</Text>
      </View>
      <View style={styles.bottomIcon}>
        <Ionicons color="#fff" size={20} name={`ios-arrow-round-${direction}`} />
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.bottomIndicator} onPress={() => navigate('MainScreen')}>
      <View style={styles.bottomIcon}>
        <Ionicons color="#fff" size={20} name={`ios-arrow-round-${direction}`} />
      </View>
      <View>
        <Text style={styles.bottomText}>{name}</Text>
      </View>
    </TouchableOpacity>
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
