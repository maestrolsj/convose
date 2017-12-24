import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions, Button,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const DeviceWidth  = Dimensions.get('window').width ;
const DeviceHeight = Dimensions.get('window').height ;


const styles = StyleSheet.create({
  container: {position:'absolute', width:DeviceWidth, height:DeviceHeight, backgroundColor:'transparent'},
});



const MoreBox = ({ children }) => (
  <TouchableHighlight  style={styles.container} onPress={Actions.pop} underlayColor="transparent" activeOpacity={1}>
     <View style={{position:'absolute',top:60,right:5,backgroundColor:'white', width:100,height:100}}>
       <TouchableOpacity   onPress={Actions.login}>
        <Text>Login</Text>
       </TouchableOpacity>
        <Text style={{marginTop:20}}>Logout</Text>
       <TouchableOpacity   onPress={Actions.profile} style={{marginTop:30}}>
         <Text>Profile</Text>
       </TouchableOpacity>
      </View>
  </TouchableHighlight>
);

export default MoreBox;
