import React from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Button,TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {position:'absolute', width:DeviceWidth, height:DeviceHeight, backgroundColor:'transparent'},
});


class Profile extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight  style={styles.container} onPress={Actions.pop} underlayColor="transparent" activeOpacity={1}>

        <View style={{position:'absolute',top:0,right:0,backgroundColor:'white', width:DeviceWidth-80,height:DeviceHeight}}>
          <Text style={{marginTop:100}}>Profile</Text>
          <Text>{this.props.userInfo.email}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}




export default Profile
