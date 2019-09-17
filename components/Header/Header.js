import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function CurrentWeather() {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <View style={styles.menuIcon}>
          <TouchableOpacity>
            <Entypo color="white" size={30} name="menu" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>Bjelašnica</Text>
        <View style={styles.menuIcon}>
          <TouchableOpacity>
            <Entypo color="white" size={25} name="ccw" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '10%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  headerContent: {
    flex: 1,
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
  },
  menuIcon: {
    textAlignVertical: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'RobotoCondensed',
  },
});
