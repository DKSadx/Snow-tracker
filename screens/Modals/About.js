import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Help(props) {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
      }}
    >
      <Text style={{ marginTop: '20%', color: 'white' }} onPress={() => props.close()}>
        About
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // style
  },
  text: {
    // style
  },
});
