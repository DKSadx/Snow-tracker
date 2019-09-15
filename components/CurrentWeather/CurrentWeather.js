import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class CurrentWeather extends Component {
  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
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
});
