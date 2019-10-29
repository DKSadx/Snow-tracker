import React, { useState, useEffect } from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  BackHandler,
  TouchableOpacity,
  Image,
  Modal,
  Dimensions,
} from 'react-native';
import { ScreenOrientation } from 'expo';
import ImageViewer from 'react-native-image-zoom-viewer';

import { colors } from '../../utils/colors';

const bjelasnicaMap = [
  {
    props: {
      url: '',
      source: require('../../assets/images/bjel-map.jpg'),
    },
  },
];
const jahorinaMap = [
  {
    props: {
      url: '',
      source: require('../../assets/images/jah-map.jpg'),
    },
  },
];

export default function Maps(props) {
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

  const [mapState, setMapState] = useState({ showMap: false });

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

  const changeScreenOrientation = async () => {
    if (Dimensions.get('window').width < Dimensions.get('window').height) {
      await ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE);
    } else {
      await ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT);
    }
  };

  const map = (
    <Modal
      animationType={'fade'}
      visible={true}
      transparent={true}
      onRequestClose={async () => {
        // Changes screen orientation to portrait and closes map
        await ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT);
        setMapState({ showMap: false });
      }}
    >
      <ImageViewer
        backgroundColor={colors.modalBgColor}
        imageUrls={mapState.mapType === 'bjelasnica' ? bjelasnicaMap : jahorinaMap}
        saveToLocalByLongPress={false}
        renderIndicator={() => {}}
        enableSwipeDown={true}
        onSwipeDown={async () => {
          // Changes screen orientation to portrait and closes map
          await ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT);
          setMapState({ showMap: false });
        }}
      />
      <View style={styles.mapOptions}>
        <TouchableOpacity onPress={changeScreenOrientation}>
          <Text style={styles.mapOptionsText}>Rotate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            await ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT);
            setMapState({ showMap: false });
          }}
        >
          <Text style={styles.mapOptionsText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );

  return (
    <Animated.View style={{ ...styles.overlay, opacity: fadeAnim }}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Choose map</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => setMapState({ showMap: true, mapType: 'bjelasnica' })}>
            <Image
              style={styles.mapImage}
              resizeMode="contain"
              source={require('../../assets/images/bjel-map.jpg')}
            />
            <Text style={styles.mapName}>Bjelašnica</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMapState({ showMap: true, mapType: 'jahorina' })}>
            <Image
              style={styles.mapImage}
              resizeMode="contain"
              source={require('../../assets/images/jah-map.jpg')}
            />
            <Text style={styles.mapName}>Jahorina</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => backHandlerEvent.cb()} style={styles.closeBtn}>
          <Text style={styles.closeBtnText}>close</Text>
        </TouchableOpacity>
      </View>
      {mapState.showMap && map}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    opacity: 1,
    position: 'absolute',
    justifyContent: 'center',
  },
  container: {
    height: '70%',
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
  mapImage: {
    alignSelf: 'center',
    borderRadius: 15,
    height: 110,
    marginTop: 30,
  },
  mapName: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  mapOptions: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: '10%',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  mapOptionsText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  closeBtn: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: '3%',
  },
  closeBtnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
