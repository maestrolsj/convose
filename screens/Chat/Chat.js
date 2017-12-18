import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from "react-native";
import {Actions} from "react-native-router-flux";
import {Screen,CardList,TouchOpacityBt, ConvoseText}     from "../../components/";

export default class extends React.Component {
 static onEnter = () => {
    Actions.refresh({
      title: 'Chat',
      leftTitle: '< home',
      hideNavBar:false,
      onLeft: () => {Actions.pop()}
    });
  };

  render() {
    return (
      <Screen>
        <ConvoseText>Chat page</ConvoseText>
      </Screen>
    );
  }
}
