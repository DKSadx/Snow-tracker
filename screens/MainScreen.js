import React from 'react';

import Header from '../components/Header/Header';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import DailyWeather from '../components/DailyWeather/DailyWeather';
import BottomIndicator from '../components/BottomIndicator/BottomIndicator';

export default function MainScreen() {
  return (
    <>
      <Header />
      <CurrentWeather />
      <DailyWeather />
      <BottomIndicator />
    </>
  );
}
