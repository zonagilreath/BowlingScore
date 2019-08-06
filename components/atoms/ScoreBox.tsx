import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ScoreBox(props: ScoreBoxProps){
  const type: string = types[props.type][props.activeFrame];
  let score = props.score ? props.score : ' - ';
  return <View style={styles.container, styles[type]}><Text>{score}</Text></View>
}

const types = [
  ['leftBox','leftBoxActive'],
  ['rightBox', 'rightBoxActive'],
  ['mainBox','mainBoxActive']
]

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftBox: {
    flex: 1,
  },
  leftBoxActive: {
    flex: 1,
  },
  rightBox: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#000'
  },
  rightBoxActive: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#000'
  },
  mainBox: {
    flex: 2,
    width: 150
  },
  mainBoxActive: {
    flex: 1,
    width: 500
  } 
});