export const getSummary = icon => {
  let summary = '';
  switch (icon) {
    case 'clear-day':
      summary = 'Clear';
      break;
    case 'clear-night':
      summary = 'Clear';
      break;
    case 'rain':
      summary = 'Rain';
      break;
    case 'snow':
      summary = 'Snow';
      break;
    case 'sleet':
      summary = 'Sleet';
      break;
    case 'wind':
      summary = 'Wind';
      break;
    case 'fog':
      summary = 'Fog';
      break;
    case 'cloudy':
      summary = 'Cloudy';
      break;
    case 'partly-cloudy-day':
      summary = 'Partly cloudy';
      break;
    case 'partly-cloudy-night':
      summary = 'Partly cloudy';
      break;
    case 'hail':
      summary = 'Hail';
      break;
    case 'thunderstorm':
      summary = 'ThunderStorm';
      break;
    case 'tornado':
      summary = 'Tornado';
      break;
    default:
      return;
  }
  return summary;
};

// North is 0 and progression is clockwise
export const calculateWindDirection = degrees => {
  let direction = '';
  if (degrees >= 350 && degrees < 10) direction = 'North';
  else if (degrees >= 10 && degrees < 80) direction = 'North-East';
  else if (degrees >= 80 && degrees < 100) direction = 'East';
  else if (degrees >= 100 && degrees < 170) direction = 'South-East';
  else if (degrees >= 170 && degrees < 190) direction = 'South';
  else if (degrees >= 190 && degrees < 260) direction = 'South-West';
  else if (degrees >= 260 && degrees < 280) direction = 'West';
  else if (degrees >= 280 && degrees < 350) direction = 'North-West';
  else direction = "Can't calculate direction";
  return direction;
};
