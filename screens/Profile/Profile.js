import React from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Button,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
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
    borderColor:1
  },
});

const Profile = ({ children }) => (
  <TouchableOpacity style={styles.container} onPress={Actions.pop}>
     <View style={{position:'absolute',top:0,right:0,backgroundColor:'white', width:DeviceWidth-80,height:DeviceHeight}}>
        <Text style={{marginTop:100}}>Profile</Text>
      </View>
  </TouchableOpacity>
);

export default Profile;