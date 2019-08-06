import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScoreBoard from './components/ScoreBoard'
import Frame from './components/Frame';

export default function App() {
  const frames = [];
  const testFrame = (<Frame frameNum={0} testScores={[7, 3]} frames={frames} subTotal={10}/>)
  frames.push(testFrame);
  return (

    <View style={styles.container}>
      <ScoreBoard />
      <View style={styles.controller}>
        {testFrame}
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
