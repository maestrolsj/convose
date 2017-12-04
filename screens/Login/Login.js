import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity,TextInput} from "react-native";
import {Actions} from "react-native-router-flux";
import {Screen} from "../../components/";
import ConvoseText           from "../../components/ConvoseText"
import { FontAwesome,MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  input:{flexDirection:'row', width:250,height:40, borderBottomWidth:1, borderBottomColor:'gray', marginTop:20,  alignItems:'center'}
});

export default class extends React.Component {

  static onEnter = () => {
    Actions.refresh({
      hideNavBar:true
    });
  };


  login(){

  }

  render() {
    return (
      <Screen>

        <ConvoseText style={{color:'#353535', fontWeight:'bold',marginBottom:50, fontSize:25}}>Login In</ConvoseText>
        <View style={styles.input}>
          <MaterialCommunityIcons name="email-variant" size={17} color="gray"
                                  style={{width:40, textAlign:'center'}}/>
        <TextInput style                 = {{flex:1}}
                   autoCapitalize        = "none"
                   onSubmitEditing       = {() => this.passwordInput.focus()}
                   autoCorrect           = {false}
                   keyboardType          = 'email-address'
                   onChangeText          = {(val) => {this.setState({id: val})}}
                   returnKeyType         = "next"
                   placeholder           = 'Email'
                   underlineColorAndroid ='transparent'
                   placeholderTextColor  ='gray'/>
        </View>

        <View style={styles.input}>
          <MaterialCommunityIcons name="lock-open-outline" size={17} color="gray"
                                  style={{width:40, textAlign:'center'}}/>
        <TextInput style                 = {{flex:1}}
                   returnKeyType         = "go"
                   ref                   = {(input)=> this.passwordInput = input}
                   placeholder           = 'Password'
                   placeholderTextColor  ='gray'
                   underlineColorAndroid = 'transparent'
                   onChangeText          = {(val) => {this.setState({pwd: val})}}
                   secureTextEntry/>
        </View>

        <TouchableOpacity style={{width:100,height:40,borderWidth:1, borderColor:'blue',justifyContent:'center',alignItems:'center',marginTop:20}}>
          <ConvoseText>Log In</ConvoseText>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop:10, fontSize:15}}>
          <ConvoseText>Forgot Password?</ConvoseText>
        </TouchableOpacity>

        <ConvoseText style={{marginTop:10, marginBottom:30, fontSize:15}}>Or, Log In with</ConvoseText>

        <FontAwesome.Button name="facebook" backgroundColor="#3b5998" onPress={this.login} >
          Login with Facebook
        </FontAwesome.Button>

        <TouchableOpacity onPress={Actions.pop}  style={{position:'absolute',left:20,top:30}}>
        <Ionicons name="md-arrow-back" size={30} color="gray" style={{width:50}} />
        </TouchableOpacity>
      </Screen>
    );
  }
}
