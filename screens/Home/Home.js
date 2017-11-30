import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity,TextInput,Dimensions } from "react-native";
import {Actions} from "react-native-router-flux";
import {Screen,CardList} from "../../components/";

const DeviceHeight = Dimensions.get('window').height;
const DeviceWidth  = Dimensions.get('window').width ;
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
    bottom:0,
    left:0,
    width:DeviceWidth,
    height:50,
    flexDirection:'row'
  }
});

export default class Home extends React.Component {


  static onEnter = (that) => {
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
      <Screen>

        <CardList/>

        <View  style={styles.input}>
          <TouchableOpacity onPress={Actions.search} style={{flex:3, backgroundColor:'gray',alignItems:'center',justifyContent:'center'}}>
            <Text style={{color: '#fff',fontSize:20}}>Search interests</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> Actions.drawerOpen()} style={{flex:1,backgroundColor:'gold', alignItems:'center',justifyContent:'center'}}>
            <Text>New msg</Text>
          </TouchableOpacity>
        </View>
      </Screen>
    );
  }
}
