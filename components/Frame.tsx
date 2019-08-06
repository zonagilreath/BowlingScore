import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScoreBox from './atoms/ScoreBox';

export default function Frame(props){
    console.log(props)
    const active: number = props.activeFrame ? 1 : 0;
    const score1repr: string = props.score1 === 10 ? 'X' : props.score1;
    const score2repr: string = (props.score1 === 10 && props.score2 === 10) ? 'X' : props.score1 + props.score2 === 10 ? '/' : props.score2;
    const score3repr: string = (props.score2 === 10 && props.score3 === 10) ? 'X' : props.score2 + props.score3 === 10 ? '/' : props.score3;
    const topRow = (props.frameNum === 9) ? (
      <View style={styles.topRow}>
        <ScoreBox score={score1repr} type={1} activeFrame={active} />
        <ScoreBox score={score2repr} type={1} activeFrame={active} />
        <ScoreBox score={score3repr} type={1} activeFrame={active} />
      </View>
    ) : (
      <View style={styles.topRow}>
        <ScoreBox score={' '} type={0} activeFrame={active} />
        <ScoreBox score={score1repr} type={0} activeFrame={active} />
        <ScoreBox score={score2repr} type={1} activeFrame={active} />
      </View>
    )
  return (
    <View style={styles.container}>
      {topRow}
      <ScoreBox score={props.subTotal} type={2} activeFrame={active} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: 150,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topRow: {
    flex: 1,
    flexDirection: 'row',
  }
});