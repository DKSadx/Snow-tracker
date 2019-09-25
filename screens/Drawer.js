import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

import Help from './Modals/Help';
import About from './Modals/About';

export default function Drawer(props) {
  const [modal, toggleModal] = useState({ isOpen: false, type: null });
  const { navigate } = props.navigation;

  const closeModal = () => toggleModal({ isOpen: false });

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
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              toggleModal({ isOpen: true, type: 'Help' });
            }}
          >
            <Text style={styles.optionText}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              toggleModal({ isOpen: true, type: 'About' });
            }}
          >
            <Text style={styles.optionText}>About</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
      {modal.isOpen === true &&
        (modal.type === 'Help' ? <Help close={closeModal} /> : <About close={closeModal} />)}
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
