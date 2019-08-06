import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ScoreBox(props: ScoreBoxProps){
  const type: string = types[props.type][props.activeFrame];
  const score = props.score ? props.score : ' - ';
  const textStyle = props.activeFrame ? 'bigText' : 'smallText';
  return <View style={styles[type]}><Text style={styles[textStyle]}>{score}</Text></View>
}

const types = [
  ['leftBox','leftBoxActive'],
  ['rightBox', 'rightBoxActive'],
  ['mainBox','mainBoxActive']
]

const styles = StyleSheet.create({
  leftBox: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftBoxActive: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightBox: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightBoxActive: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainBox: {
    flex: 2.25,
    width: 150,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBoxActive: {
    flex: 2.25,
    width: 400,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bigText: {
    fontSize: 50
  },
  smallText: {
    fontSize: 20
  }
});