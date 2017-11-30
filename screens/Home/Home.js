import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity,TextInput } from "react-native";
import {Actions} from "react-native-router-flux";
import {Screen,CardList} from "../../components/";

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
    backgroundColor: 'rgb(93,194,170)',
    width:200,
    height:50
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

        <TouchableOpacity onPress={Actions.search} style={styles.input}>
          <Text style={{color: '#fff',fontSize:20}}>Search interests</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> Actions.drawerOpen()} style={{position:'absolute', bottom:10, right:10}}>
          <Text>New msg</Text>
        </TouchableOpacity>
      </Screen>
    );
  }
}
