import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity,TextInput,Dimensions,StatusBar } from "react-native";
import {Actions} from "react-native-router-flux";
import {Screen,CardList} from "../../components/";
import { Ionicons,Octicons } from '@expo/vector-icons';

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

    width:DeviceWidth,
    height:50,
    flexDirection:'row'
  }
});

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

        <View  style={styles.input}>
          <TouchableOpacity onPress={Actions.search} style={{flex:4,flexDirection:'row', backgroundColor:'white',alignItems:'center'}}>
            <Octicons name="search" size={17} color="gray" style={{marginLeft:15}}/><Text style={{color: 'gray',fontSize:16, marginLeft:15}}>Add interests</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> Actions.drawerOpen()} style={{flex:1,backgroundColor:'gold', alignItems:'center',justifyContent:'center'}}>
            <Text>+1</Text>
          </TouchableOpacity>
        </View>
      </Screen>
    );
  }
}
