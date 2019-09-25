import React, { useState, useEffect } from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  BackHandler,
} from 'react-native';
import { colors } from '../../utils/colors';

export default function Help(props) {
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
          <Text style={styles.title}>Help</Text>
        </View>
        <View style={styles.iconsContainer}>
          <View style={styles.iconsHeaderContainer}>
            <Text style={styles.iconsHeader}>Icons:</Text>
          </View>
          <View style={styles.detailsRow}>
            <Image source={require('../../assets/icons/png/clear-day.png')} style={styles.icon} />
            <Text style={styles.iconDescription}>Clear day</Text>
          </View>
          <View style={styles.detailsRow}>
            <Image source={require('../../assets/icons/png/clear-night.png')} style={styles.icon} />
            <Text style={styles.iconDescription}>Clear night</Text>
          </View>
          <View style={styles.detailsRow}>
            <Image source={require('../../assets/icons/png/cloudy.png')} style={styles.icon} />
            <Text style={styles.iconDescription}>Cloudy</Text>
          </View>
          <View style={styles.detailsRow}>
            <Image source={require('../../assets/icons/png/fog.png')} style={styles.icon} />
            <Text style={styles.iconDescription}>Fog</Text>
          </View>
          <View style={styles.detailsRow}>
            <Image source={require('../../assets/icons/png/hail.png')} style={styles.icon} />
            <Text style={styles.iconDescription}>Hail</Text>
          </View>
          <View style={styles.detailsRow}>
            <Image
              source={require('../../assets/icons/png/partly-cloudy-day.png')}
              style={styles.icon}
            />
            <Text style={styles.iconDescription}>Partly cloudy day</Text>
          </View>
          <View style={styles.detailsRow}>
            <Image
              source={require('../../assets/icons/png/partly-cloudy-night.png')}
              style={styles.icon}
            />
            <Text style={styles.iconDescription}>Partly cloudy night</Text>
          </View>
          <View style={styles.detailsRow}>
            <Image source={require('../../assets/icons/png/rain.png')} style={styles.icon} />
            <Text style={styles.iconDescription}>Rain</Text>
          </View>
          <View style={styles.detailsRow}>
            <Image source={require('../../assets/icons/png/sleet.png')} style={styles.icon} />
            <Text style={styles.iconDescription}>Sleet</Text>
          </View>
          <View style={styles.detailsRow}>
            <Image source={require('../../assets/icons/png/snow.png')} style={styles.icon} />
            <Text style={styles.iconDescription}>Snow</Text>
          </View>
          <View style={styles.detailsRow}>
            <Image
              source={require('../../assets/icons/png/thunderstorm.png')}
              style={styles.icon}
            />
            <Text style={styles.iconDescription}>Thunderstorm</Text>
          </View>
          <View style={styles.detailsRow}>
            <Image source={require('../../assets/icons/png/wind.png')} style={styles.icon} />
            <Text style={styles.iconDescription}>Windy</Text>
          </View>
          <View style={styles.detailsRow}>
            <Image
              source={require('../../assets/icons/png/wind-speed.png')}
              style={{ ...styles.icon, height: 23, width: 28 }}
            />
            <Text style={styles.iconDescription}>Wind speed</Text>
          </View>
          <View style={styles.detailsRow}>
            <Image
              source={require('../../assets/icons/png/wind-direction.png')}
              style={styles.icon}
            />
            <Text style={styles.iconDescription}>Wind direction</Text>
          </View>
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
    height: '90%',
    width: '140%',
    backgroundColor: colors.infoModal,
    position: 'relative',
    top: '2%',
    left: '13.33%',
    borderRadius: 10,
  },
  titleView: {
    flex: 0.3,
    alignSelf: 'center',
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    marginTop: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
  },
  iconsContainer: {
    flex: 7,
  },
  iconsHeaderContainer: {
    alignItems: 'center',
    paddingTop: '5%',
  },
  iconsHeader: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    paddingBottom: '2%',
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
    paddingVertical: '1.3%',
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: '#fff',
  },
  iconDescription: {
    color: '#fff',
  },
  closeBtn: {
    flex: 1,
    justifyContent: 'center',
  },
  closeBtnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
