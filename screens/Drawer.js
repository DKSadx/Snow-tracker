import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

export default function Drawer(props) {
  const [modal, toggleModal] = useState(false);
  const { navigate } = props.navigation;

  return (
    <>
      <View style={styles.container}>
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
            <Text
              style={styles.optionText}
              onPress={() => {
                // props.navigation.closeDrawer();
                toggleModal(true);
              }}
            >
              Help
            </Text>
          </View>
          <View style={styles.option}>
            <Text style={styles.optionText}>About</Text>
          </View>
        </ImageBackground>
      </View>
      {modal && (
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            position: 'absolute',
            // zIndex: 12,
          }}
        >
          <Text style={{ marginTop: '20%' }} onPress={() => toggleModal(false)}>
            test
          </Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    position: 'relative',
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
