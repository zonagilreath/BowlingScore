import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import AbstractFrame from '../utilities/AbstractFrame';
import Frame from './Frame';


export default class ScoreBoard extends React.Component{
  constructor(props){
    super(props);
    const range = new Array(10).fill(0);
    const abstractFrames = [];
    range.forEach((_, i)=> abstractFrames.push(new AbstractFrame(i, abstractFrames)))
    this.state = {
      frames: abstractFrames,
      currentFrame: 0,
    }
    console.log(this.state.frames)
  }
  render(){
    return (
      <ScrollView horizontal>
      {this.state.frames.map((abstract, idx) => (
        <Frame
          key={'frame_'+idx}
          frameNum={idx}
          frames={this.state.frames}
          subTotal={abstract.getSubTotal()}
          testScores={[3,3,3]} />
      ))}
      </ScrollView>
    )
  }
}