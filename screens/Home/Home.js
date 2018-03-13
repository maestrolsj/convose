import React   from 'react';
import {View, Text,Image ,StyleSheet,TouchableOpacity,TextInput,StatusBar, Dimensions } from "react-native";
import {Actions}                                         from "react-native-router-flux";
import {Screen,CardList,TouchOpacityBt, ConvoseText, ConvoseNavbar, ConvoseView}     from "../../components/";
import { Ionicons,Octicons, Entypo } from '@expo/vector-icons'   ;




 class Home extends React.Component {
/*
  static onEnter = () => {
    Actions.refresh({
      title: 'Convose',
      leftTitle: 'Login',
      rightTitle: ':',
      renderRightButton : (props) => {
        return <Text>SSSS</Text>
      },
      onRight:()=>{Actions.morebox()},
      onLeft: () => {Actions.login()}
    });
  };
*/


   constructor(props) {
     super(props);
     this.props.getAuthStorage();
  }

  render() {
    return (
      <Screen style={{justifyContent:'flex-end'}}>
        <StatusBar     hidden={true}    />

        <ConvoseNavbar>
          <TouchOpacityBt style={{flex:1}} onPress={Actions.login}><Text>Login</Text></TouchOpacityBt>
          <ConvoseView style={{flex:3, alignItems:'center', justifyContent:'center'}}>
            <Image source={require('../../assets/images/logo.png')} resizeMode="contain"  style={{width:102,height:50}}/></ConvoseView>
          <TouchOpacityBt onPress={Actions.morebox} style={{flex:1,height:50}}><Entypo name="dots-three-vertical" size={17} color="gray"/></TouchOpacityBt>
        </ConvoseNavbar>
        <Text>{this.props.userInfo.email}</Text>
        <CardList/>

        <View  flexDirection="row" height={50}>
          <TouchOpacityBt onPress={Actions.search}    flex={4}     flexDirection="row">
            <Octicons     name   = "search"           size={17}    color="gray" style={{marginLeft:15}}/>
            <ConvoseText style   = {{ marginLeft:15}} color="gray" fontSize="16">Add interests</ConvoseText>
          </TouchOpacityBt>

          <TouchOpacityBt onPress={()=> Actions.drawerOpen()} flex={1}  backgroundColor="gold">
            <ConvoseText fontSize="12">+1</ConvoseText>
          </TouchOpacityBt>
        </View>
      </Screen>
    );
  }
}

// userInfo: state.storage.userInfo,



export default Home
