import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import { Screen, ChatList } from "../../components/";
import { connect } from 'react-redux';

class Chat extends React.Component {
  static onEnter = () => {
    Actions.refresh({
      title: 'Chat',
      leftTitle: '< home',
      hideNavBar: false,
      onLeft: () => { Actions.pop() }
    });


  };

  render() {
    return (
      <Screen><ChatList /></Screen>
    );
  }
}



const mapStateToProps = (state) => ({


});


export default connect(mapStateToProps)(Chat)

