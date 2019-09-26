import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BottomIndicator(props) {
  const { toggleRightDrawer } = props.navigation;
  const { direction, name } = props;
  return props.direction === 'forward' ? (
    <View style={styles.container}>
      <TouchableOpacity style={styles.bottomIndicator} onPress={() => toggleRightDrawer()}>
        <View>
          <Text style={styles.bottomText}>{`${name}  `}</Text>
        </View>
        <View style={styles.bottomIcon}>
          <Ionicons color="#fff" size={20} name={`ios-arrow-round-${direction}`} />
        </View>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.container}>
      <TouchableOpacity style={styles.bottomIndicator} onPress={() => toggleRightDrawer()}>
        <View style={styles.bottomIcon}>
          <Ionicons color="#fff" size={20} name={`ios-arrow-round-${direction}`} />
        </View>
        <View>
          <Text style={styles.bottomText}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: '2.5%',
    alignSelf: 'center',
  },
  bottomIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '8%',
    height: '100%',
    width: '100%',
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
