import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from "react-native";
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
});

export default class extends React.Component {
/*
  static onEnter = () => {
    Actions.refresh({
      title: 'Drawer',
      leftTitle: 'home',
      onLeft: () => {Actions.replace('home')}
    });
  };
*/
  render() {
    console.log("Login RENDER");
    return (
      <View style={[styles.container, this.props.style]}>
        <Text>Drawer</Text>
        <TouchableOpacity onPress={()=>{
          Actions.drawerClose();
          Actions.chat();
          }} style={{marginTop:30}}>
          <Text> people List View</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
