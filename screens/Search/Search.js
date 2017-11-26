import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Keyboard} from "react-native";
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  input:{
    position:'absolute',
    top:30,
    left:0,
    backgroundColor: 'rgba(93,194,170,0.2)',
    color: '#fff',
    width:300,
    height:50
  }
});

export default class extends React.Component {

  componentDidMount() {
    console.log("##### DID MOUNT #####");
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TextInput style                 = {styles.input}
                   autoCapitalize        = "none"
                   autoCorrect           = {false}
                   keyboardType          = 'default'
                   onSubmitEditing       = {() => { Keyboard.dismiss(); Actions.pop();  }}
                   returnKeyType         = "search"
                   placeholder           = 'Search Interest'
                   underlineColorAndroid ='transparent'
                   placeholderTextColor  ='rgba(93,194,170,0.7)'
                   autoFocus = {true}

        />

        <TouchableOpacity onPress={Actions.pop} >
          <Text> recommend List </Text>
        </TouchableOpacity>

        <TouchableOpacity  style={{marginTop:30}} onPress={()=>{
          Keyboard.dismiss();
          Actions.pop();   }}>
          <Text>close</Text>
        </TouchableOpacity>


      </View>
    );
  }
}
