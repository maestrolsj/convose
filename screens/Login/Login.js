import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity,TextInput} from "react-native";
import {Actions} from "react-native-router-flux";
import { FontAwesome,MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {Screen,CardList,TouchOpacityBt, ConvoseText, ConvoseView}     from "../../components/";
import Button from "../../components/Button/Button";


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
  input:{flexDirection:'row', width:250,height:40, borderBottomWidth:1, borderBottomColor:'gray', marginBottom:20,  alignItems:'center'}
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
        <ConvoseView  width={250} height={40}  flexDirection="row" style={{borderBottomWidth:1, borderBottomColor:'gray', marginBottom:20,  alignItems:'center'}}>
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
        </ConvoseView>

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

        <Button primary={true} onClick={this.login}>Log in</Button>

        <TouchableOpacity style={{marginTop:10}}>
          <ConvoseText style={{fontSize:15}}>Forgot Password?</ConvoseText>
        </TouchableOpacity>

        <ConvoseText style={{marginTop:10, marginBottom:30, fontSize:15}}>Or, Log In with</ConvoseText>

        <FontAwesome.Button name="facebook" backgroundColor="#3b5998" onPress={this.login} >
          Login with Facebook
        </FontAwesome.Button>

        <TouchableOpacity onPress={Actions.register}>
          <Text>Register</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={Actions.pop}  style={{position:'absolute',left:20,top:30}}>
        <Ionicons name="md-arrow-back" size={30} color="gray" style={{width:50}} />
        </TouchableOpacity>
      </Screen>
    );
  }
}
