import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { DrawerActions } from 'react-navigation-drawer';

export default function Drawer(props) {
  const { navigate, state } = props.navigation;
  return (
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <ImageBackground source={require('../assets/images/4.jpg')} style={styles.imageBackground}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Mountains:</Text>
        </View>
        <TouchableOpacity style={styles.option} onPress={() => navigate('MainScreen')}>
          <Text style={styles.optionText}>Bjelašnica</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigate('RightScreen')}>
          <Text style={styles.optionText}>Jahorina</Text>
        </TouchableOpacity>
        <View style={styles.option}>
          <Text style={styles.optionText}>About</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  title: {
    height: '40%',
    justifyContent: 'center',
  },
  titleText: {
    color: '#fff',
    paddingLeft: '10%',
    fontSize: 25,
  },
  option: {
    marginVertical: '10%',
    marginLeft: '20%',
  },
  optionText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'RobotoCondensed',
  },
});
