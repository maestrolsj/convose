import React from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Button,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const MoreBox = ({ children }) => (
  <TouchableOpacity style={styles.container} onPress={Actions.pop}>
     <View style={{position:'absolute',top:60,right:5,backgroundColor:'white', width:100,height:100}}>
       <TouchableOpacity   onPress={Actions.login}>
        <Text>Login</Text>
       </TouchableOpacity>
        <Text style={{marginTop:20}}>Logout</Text>
      </View>
  </TouchableOpacity>
);

export default MoreBox;
