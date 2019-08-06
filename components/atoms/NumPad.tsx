import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, TextInput} from 'react-native';

export default class NumPad extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userInput: '0',
      modalVisible: true
    }
  }

  render(){
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View>
          <TextInput
            keyboardType={'numeric'}
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(userInput) => this.setState({userInput})}
            value={this.state.userInput}
          />
        </View>
      </Modal>
    )
  }
}