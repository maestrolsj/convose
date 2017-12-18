import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity,TextInput,StatusBar } from "react-native";
import {Actions}             from "react-native-router-flux";
import {Screen,CardList,TouchOpacityBt, ConvoseText}     from "../../components/";
import { Ionicons,Octicons } from '@expo/vector-icons';




export default class Home extends React.Component {

  static onEnter = () => {
    Actions.refresh({
      title: 'Convose',
      leftTitle: 'Login',
      rightTitle: ':',
      onRight:()=>{Actions.morebox()},
      onLeft: () => {Actions.login()}
    });
  };


  render() {
    return (
      <Screen style={{justifyContent:'flex-end'}}>
        <StatusBar     hidden={true}    />
        <CardList/>

        <View  flexDirection="row" height={50}>
          <TouchOpacityBt onPress={Actions.search} flex={4} flexDirection="row">
            <Octicons name="search" size={17} color="gray" style={{marginLeft:15}}/>
            <ConvoseText style={{ marginLeft:15}} color="gray"  fontSize="16">Add interests</ConvoseText>
          </TouchOpacityBt>

          <TouchOpacityBt onPress={()=> Actions.drawerOpen()} flex={1}  backgroundColor="gold">
            <ConvoseText fontSize="12">+1</ConvoseText>
          </TouchOpacityBt>
        </View>
      </Screen>
    );
  }
}
