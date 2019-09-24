import React, { useEffect, useState } from 'react';
import { Animated, View, StyleSheet, BackHandler } from 'react-native';

import ModalNavigator from '../../navigation/ModalNavigator';

export default function Modal(props) {
  const { data, dateDay, day, closeModal } = props;
  const [fadeAnim] = useState(new Animated.Value(0)); // Sets initial value for opacity to 0
  const [backHandlerEvent] = useState({
    cb: () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
      }).start(() => props.closeModal());
      // Only if the function returns true the action will be overwritten
      return true;
    },
  });

  useEffect(() => {
    // Fade in animation when component mounts
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
    }).start();
    // Overrides androids hardware back button so that it executes a custom action instead the native one
    // Adds event listener on mount and removes on unmount
    BackHandler.addEventListener('hardwareBackPress', backHandlerEvent.cb);
    return () => BackHandler.removeEventListener('hardwareBackPress', backHandlerEvent.cb);
  }, []);

  return (
    <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
      {/* <View style={styles.hourlyContainer}> */}
      <ModalNavigator screenProps={{ data, dateDay, day, closeModal: backHandlerEvent.cb }} />
      {/* </View> */}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  // hourlyContainer: {
  //   width: '100%',
  //   height: '100%',
  //   alignSelf: 'center',
  //   borderRadius: 5,
  // },
  container: {
    height: '82%',
    width: '90%',
    position: 'absolute',
    top: '15%',
    alignSelf: 'center',
    zIndex: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
