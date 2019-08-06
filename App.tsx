import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScoreBoard from './components/ScoreBoard'
import Frame from './components/Frame';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex:1}}>
        <Text></Text>
      </View>
      <View style={{flex:9}}>
        <ScoreBoard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#000',
    justifyContent: 'center',
  },
  controller: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 70
  }
});
