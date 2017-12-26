import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions, Button,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ShadowView from 'react-native-shadow-view'
import { SimpleLineIcons,MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const DeviceWidth  = Dimensions.get('window').width ;
const DeviceHeight = Dimensions.get('window').height ;


const styles = StyleSheet.create({
  container: {position:'absolute', width:DeviceWidth, height:DeviceHeight, backgroundColor:'transparent'},
});



const MoreBox = ({ children }) => (
  <TouchableHighlight  style={styles.container} onPress={Actions.pop} underlayColor="transparent" activeOpacity={1}>

    <ShadowView style={{
      position:'absolute',top:60,right:5,
      height    : 100,
      width:180,
      backgroundColor: 'white',
      borderRadius: 2,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0, height: 2,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4,

    }}>

       <TouchableOpacity   onPress={Actions.login} style={{  width:180,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>

         <SimpleLineIcons name="login" size={17} color="gray"  style={{width:40, textAlign:'center'}}/>
         <Text>Login</Text>
       </TouchableOpacity>
       <TouchableOpacity   onPress={Actions.profile} style={{  width:180,marginTop:30, alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
         <MaterialCommunityIcons name="pencil" size={17} color="gray"  style={{width:40, textAlign:'center'}}/>
         <Text>Profile</Text>
       </TouchableOpacity>
    </ShadowView>
  </TouchableHighlight>
);

export default MoreBox;
