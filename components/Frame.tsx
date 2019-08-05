import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScoreBox from './atoms/ScoreBox';

interface FrameProps {
  frameNum: number;
  frames: Frame[];
  subTotal: number;
  testScores?: number[]; 
}

interface FrameState {
  frameNum: number;
  started: boolean;
  score1: number;
  score2: number;
  score3: number;
  subTotal: number;
  activeFrame: number;
}

export default class Frame extends React.Component<FrameProps, FrameState> {
  constructor(props: FrameProps){
    super(props)
    this.state = {
      frameNum: props.frameNum,
      started: false,
      score1: null,
      score2: null,
      score3: null,
      subTotal: props.subTotal,
      activeFrame: 0
    };

  }

  render(){
    const active: number = this.state.activeFrame ? 1 : 0;
    const score1repr: string = this.state.score1 === 10 ? 'X' : `${this.state.score1}`;
    const score2repr: string = (this.state.score1 === 10 &&this.state.score2 === 10) ? 'X' : this.state.score1 + this.state.score2 === 10 ? '/' : `${this.state.score2}`;
    const score3repr: string = (this.state.score2 === 10 &&this.state.score3 === 10) ? 'X' : this.state.score2 + this.state.score3 === 10 ? '/' : `${this.state.score3}`;

    const topRow = (this.state.frameNum === 9) ? (
      <View style={styles.topRow}>
        <ScoreBox score={score1repr} type={1} activeFrame={active} />
        <ScoreBox score={score2repr} type={1} activeFrame={active} />
        <ScoreBox score={score3repr} type={1} activeFrame={active} />
      </View>
    ) : (
      <View style={styles.topRow}>
        <ScoreBox score={null} type={0} activeFrame={active} />
        <ScoreBox score={score1repr} type={0} activeFrame={active} />
        <ScoreBox score={score2repr} type={1} activeFrame={active} />
      </View>
    )

    return (
      <View style={styles.container}>
        {topRow}
        <ScoreBox score={this.state.subTotal} type={2} activeFrame={active} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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