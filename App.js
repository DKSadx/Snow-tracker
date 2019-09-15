import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Font from 'expo-font';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';

export default function App() {
  const [state, setState] = useState({
    data: '',
    fontLoading: true,
  });
  useEffect(() => {
    // const api =
    //   'https://api.darksky.net/forecast/2b00197b015f9a0c719fc40efb6734d4/43.7042,18.2567?exclude=currently,minutely,alerts,flags&units=si';
    // axios.get(api).then(res => setState({ data: res }));
    Font.loadAsync({
      RobotoCondensed: require('./assets/fonts/RobotoCondensed-Regular.ttf'),
      RobotoCondensedBold: require('./assets/fonts/RobotoCondensed-Bold.ttf'),
      Dosis: require('./assets/fonts/Dosis-Light.ttf'),
    }).then(() => setState({ ...state, fontLoading: false }));
  }, []);
  return (
    !state.fontLoading && (
      <ImageBackground source={require('./assets/images/1.jpg')} style={styles.imageBackground}>
        <View style={styles.app}>
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
          <View style={styles.currentWeather}>
            <Image
              source={require('./assets/icons/png/Sun.png')}
              style={{ width: 25, height: 25, tintColor: '#fff' }}
            />
            <Text style={styles.currentWeatherText}>Sunny</Text>
          </View>
          <Text style={styles.temperature}>22°C</Text>
          <Text style={styles.location}>Bjelašnica</Text>
          <View style={styles.dailyContainer}>
            <ScrollView>
              <TouchableOpacity>
                <View style={styles.dailyView}>
                  <View style={styles.dateView}>
                    <Text style={styles.date}>13.09</Text>
                  </View>
                  <View style={styles.weatherIcon}>
                    <Image
                      source={require('./assets/icons/png/Cloud-Fog.png')}
                      style={{ width: 60, height: 60, tintColor: '#fff' }}
                    />
                  </View>
                  <View style={styles.dailyTemp}>
                    <Text style={styles.dailyTempText}>22°C</Text>
                  </View>
                  <View style={styles.dailyLimits}>
                    <Text style={styles.dailyMax}>
                      max: <Text style={styles.textBold}>29°C</Text>
                    </Text>
                    <Text style={styles.dailyMin}>
                      min: <Text style={styles.textBold}>15°C</Text>
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.dailyView}>
                  <View style={styles.dateView}>
                    <Text style={styles.date}>14.09</Text>
                  </View>
                  <View style={styles.weatherIcon}>
                    <Image
                      source={require('./assets/icons/png/Cloud-Drizzle-Sun.png')}
                      style={{ width: 60, height: 60, tintColor: '#fff' }}
                    />
                  </View>
                  <View style={styles.dailyTemp}>
                    <Text style={styles.dailyTempText}>24°C</Text>
                  </View>
                  <View style={styles.dailyLimits}>
                    <Text style={styles.dailyMax}>
                      max: <Text style={styles.textBold}>30°C</Text>
                    </Text>
                    <Text style={styles.dailyMin}>
                      min: <Text style={styles.textBold}>19°C</Text>
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.dailyView}>
                  <View style={styles.dateView}>
                    <Text style={styles.date}>15.09</Text>
                  </View>
                  <View style={styles.weatherIcon}>
                    <Image
                      source={require('./assets/icons/png/Cloud-Rain-Sun-Alt.png')}
                      style={{ width: 60, height: 60, tintColor: '#fff' }}
                    />
                  </View>
                  <View style={styles.dailyTemp}>
                    <Text style={styles.dailyTempText}>20°C</Text>
                  </View>
                  <View style={styles.dailyLimits}>
                    <Text style={styles.dailyMax}>
                      max: <Text style={styles.textBold}>26°C</Text>
                    </Text>
                    <Text style={styles.dailyMin}>
                      min: <Text style={styles.textBold}>13°C</Text>
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.dailyView}>
                  <View style={styles.dateView}>
                    <Text style={styles.date}>16.09</Text>
                  </View>
                  <View style={styles.weatherIcon}>
                    <Image
                      source={require('./assets/icons/png/Cloud-Sun.png')}
                      style={{ width: 60, height: 60, tintColor: '#fff' }}
                    />
                  </View>
                  <View style={styles.dailyTemp}>
                    <Text style={styles.dailyTempText}>22°C</Text>
                  </View>
                  <View style={styles.dailyLimits}>
                    <Text style={styles.dailyMax}>
                      max: <Text style={styles.textBold}>28°C</Text>
                    </Text>
                    <Text style={styles.dailyMin}>
                      min: <Text style={styles.textBold}>16°C</Text>
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.dailyView}>
                  <View style={styles.dateView}>
                    <Text style={styles.date}>17.09</Text>
                  </View>
                  <View style={styles.weatherIcon}>
                    <Image
                      source={require('./assets/icons/png/Cloud-Sun.png')}
                      style={{ width: 60, height: 60, tintColor: '#fff' }}
                    />
                  </View>
                  <View style={styles.dailyTemp}>
                    <Text style={styles.dailyTempText}>21°C</Text>
                  </View>
                  <View style={styles.dailyLimits}>
                    <Text style={styles.dailyMax}>
                      max: <Text style={styles.textBold}>29°C</Text>
                    </Text>
                    <Text style={styles.dailyMin}>
                      min: <Text style={styles.textBold}>15°C</Text>
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.dailyView}>
                  <View style={styles.dateView}>
                    <Text style={styles.date}>18.09</Text>
                  </View>
                  <View style={styles.weatherIcon}>
                    <Image
                      source={require('./assets/icons/png/Sun.png')}
                      style={{ width: 60, height: 60, tintColor: '#fff' }}
                    />
                  </View>
                  <View style={styles.dailyTemp}>
                    <Text style={styles.dailyTempText}>19°C</Text>
                  </View>
                  <View style={styles.dailyLimits}>
                    <Text style={styles.dailyMax}>
                      max: <Text style={styles.textBold}>25°C</Text>
                    </Text>
                    <Text style={styles.dailyMin}>
                      min: <Text style={styles.textBold}>11°C</Text>
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.dailyView}>
                  <View style={styles.dateView}>
                    <Text style={styles.date}>19.09</Text>
                  </View>
                  <View style={styles.weatherIcon}>
                    <Image
                      source={require('./assets/icons/png/Cloud.png')}
                      style={{ width: 60, height: 60, tintColor: '#fff' }}
                    />
                  </View>
                  <View style={styles.dailyTemp}>
                    <Text style={styles.dailyTempText}>21°C</Text>
                  </View>
                  <View style={styles.dailyLimits}>
                    <Text style={styles.dailyMax}>
                      max: <Text style={styles.textBold}>28°C</Text>
                    </Text>
                    <Text style={styles.dailyMin}>
                      min: <Text style={styles.textBold}>15°C</Text>
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={styles.bottom}>
            <View>
              <Text style={styles.bottomText}>Jahorina</Text>
            </View>
            <View style={styles.bottomIcon}>
              <Ionicons color="white" size={20} name="ios-arrow-round-forward" />
            </View>
          </View>
        </View>
      </ImageBackground>
    )
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  app: {
    height: '100%',
    width: '100%',
  },
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
  currentWeather: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 30,
    flexDirection: 'row',
  },
  currentWeatherText: {
    color: '#fff',
    fontSize: 12,
    textAlignVertical: 'center',
  },
  temperature: {
    color: '#fff',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 50,
    fontFamily: 'RobotoCondensedBold',
  },
  location: {
    color: '#fff',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 25,
    marginBottom: '15%',
    fontFamily: 'RobotoCondensed',
  },
  dailyContainer: {
    width: '80%',
    height: '50%',
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 5,
  },
  dailyView: {
    flex: 1,
    backgroundColor: 'rgba(5,102,141, 0.5)',
    height: 60,
    marginTop: '2%',
    marginHorizontal: '5%',
    paddingRight: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
  dateView: {
    flex: 1,
    paddingLeft: '4%',
  },
  date: {
    fontFamily: 'RobotoCondensed',
    color: '#fff',
  },
  weatherIcon: {
    flex: 2,
    width: 10,
  },
  dailyTemp: {
    flex: 4,
    paddingLeft: '10%',
  },
  dailyTempText: {
    fontSize: 25,
    color: '#fff',
  },
  dailyMax: {
    paddingBottom: '3%',
    color: '#fff',
    fontFamily: 'RobotoCondensed',
  },
  dailyMin: {
    color: '#fff',
    fontFamily: 'RobotoCondensed',
  },
  textBold: {
    fontWeight: 'bold',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '8%',
  },
  bottomText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Dosis',
  },
  bottomIcon: {
    paddingLeft: '5%',
  },
});
