import React from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Modal, TextInput} from 'react-native';
import AbstractFrame from '../utilities/AbstractFrame';
import Frame from './Frame';
import NumPad from './atoms/NumPad';



export default class ScoreBoard extends React.Component{
  constructor(props){
    super(props);
    const range = new Array(10).fill(0);
    const abstractFrames = [];
    range.forEach((_, i)=> abstractFrames.push(new AbstractFrame(i, abstractFrames)))
    this.state = {
      frames: abstractFrames,
      currentFrame: 0,
      userInput: '0',
      acceptInput: false
    }
    console.log(this.state.frames)
  }

  handleActiveFrameTouch(){

  }

  userAddScore(){
    
  }

  render(){
    return (
      <View style={{flex: 1}}>
        <ScrollView horizontal style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        {this.state.frames.map((abstract, idx) => (
          <Frame
            key={'frame_'+idx}
            frameNum={idx}
            activeFrame={false}
            frames={abstract.frames}
            score1={abstract.score1}
            score2={abstract.score2}
            score3={abstract.score3}
            subTotal={abstract.getSubTotal()}/>
        ))}
        </ScrollView>
        {this.state.acceptInput ? (

          ) : (
          
          )}
        <TouchableOpacity style={{flex: 2.5}}>
          <Frame
            frameNum={this.state.currentFrame}
            activeFrame={true}
            frames={this.state.frames}
            score1={this.state.frames[this.state.currentFrame].score1}
            score2={this.state.frames[this.state.currentFrame].score2}
            score3={this.state.frames[this.state.currentFrame].score3}
            subTotal={this.state.frames[this.state.currentFrame].getSubTotal()}/>
        </TouchableOpacity>
      </View>
    )
  }
}