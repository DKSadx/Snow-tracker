import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default function Spinner(props) {
  const spinnerSize = props.spinnerSize ? props.spinnerSize : 'large';
  const spinnerColor = props.spinnerColor ? props.spinnerColor : '#fff';
  const containerStyle = props.containerStyle ? props.containerStyle : {};
  const textStyle = props.textStyle ? props.textStyle : {};

  return (
    <View style={{ ...containerStyle }}>
      <ActivityIndicator size={spinnerSize} color={spinnerColor} />
      <Text style={{ color: '#fff', textAlign: 'center', ...textStyle }}>Loading...</Text>
    </View>
  );
}
