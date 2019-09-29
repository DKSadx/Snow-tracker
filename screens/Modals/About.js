import React, { useState, useEffect } from 'react';
import { Animated, Text, View, StyleSheet, BackHandler, TouchableOpacity } from 'react-native';
import { colors } from '../../utils/colors';

export default function About(props) {
  const [fadeAnim] = useState(new Animated.Value(0)); // Sets initial value for opacity to 0
  const [backHandlerEvent] = useState({
    cb: () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
      }).start(() => props.close());
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
    <Animated.View style={{ ...styles.overlay, opacity: fadeAnim }}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}>About</Text>
        </View>
        <View style={styles.about}>
          <Text style={styles.aboutText}>
            <Text>
              This is mainly a personal project made for tracking weather and ski conditions for two
              biggest ski resorts in Bosnia and Herzegovina.{'\n'}
            </Text>
            <Text>
              App is under the GPL version 3 license. You can use, change or share it for free but
              it must be kept under the same license.{'\n\n'}
            </Text>
            <Text>by Darko Kojovic, github: @DKSadx</Text>
          </Text>
        </View>
        <TouchableOpacity onPress={() => backHandlerEvent.cb()} style={styles.closeBtn}>
          <Text style={styles.closeBtnText}>close</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    justifyContent: 'center',
  },
  container: {
    height: '35%',
    width: '140%',
    backgroundColor: colors.infoModal,
    position: 'relative',
    left: '13.33%',
    justifyContent: 'center',
    borderRadius: 10,
  },
  titleView: {
    flex: 0.8,
    alignSelf: 'center',
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    marginTop: '3%',
    marginBottom: '3%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
  },
  about: {
    flex: 3.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },
  aboutText: {
    textAlign: 'center',
    color: '#fff',
  },
  closeBtn: {
    flex: 1,
    justifyContent: 'center',
    marginTop: '3%',
  },
  closeBtnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
