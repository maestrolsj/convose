import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Screen, TouchOpacityBt, ConvoseText } from '../../components/';

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
    return (
      <Screen>
        <ConvoseText>Drawer</ConvoseText>
        <TouchOpacityBt onPress={() => {
          Actions.drawerClose()
          Actions.chat()
        }} style={{ marginTop: 30 }}>
          <ConvoseText> people List View</ConvoseText>
        </TouchOpacityBt>

      </Screen>
    )
  }
}
