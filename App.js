import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList , Image} from 'react-native';
import {
   // DrawerItems,
    StackNavigator,
    DrawerNavigator
} from 'react-navigation';

import MainScreen from './screens/MainScreen';
import Stack1Screen from './screens/Stack1Screen';
import Stack2Screen from './screens/Stack2Screen';

import ConfigModal  from 'react-native-simple-modal';

const StackNavi = StackNavigator({
    Stack1Screen: { screen: Stack1Screen },
    Stack2Screen: { screen: Stack2Screen }
});


export default class App extends React.Component {

  constructor(props){
    super(props);

      this.renderRow         = this.renderRow.bind(this)        ;
      this.fetchConversation = this.fetchConversation.bind(this);
      this.state = {
          modal : false,
          data  : ['a','b','c','d','e','g','h','j'],
      }
  }


  fetchConversation(id){
      console.log("###### fetch list ######");

      this.setState({modal:true});
  }

  renderRow(items){
        return(
            <TouchableOpacity onPress={this.fetchConversation} style={{flex:1,flexDirection:'row' ,height:40}}>
                <Image
                       source     = {require('./img/pic.jpeg')}
                       borderRadius = {15}
                       style      = {{ width:30, height:30,alignItems: 'center', justifyContent:'center', marginLeft:10 }}

                />
                <Text style={{marginLeft:10}}>{items.item}</Text>
            </TouchableOpacity>
        )
  }

  render() {

      var Temp = DrawerNavigator({
              Home: {
                  screen: MainScreen,
              },
              SimpleApp: {
                  screen: StackNavi,
              },
          },
          {
              drawerWidth     : 200,
              drawerPosition  : 'right',
              contentComponent: props =>{
                  return (
                      <View  style={{flex:1}}>
                          
                          <Text style={{marginTop:40}}>CONVERSATION</Text>
                          <FlatList
                              data                  = {this.state.data}
                              initialNumToRender    = {20}
                              onEndReachedThreshold = {2}
                              renderItem            = {this.renderRow}
                              keyExtractor          = {(item, index) => item}
                              style                 = {{flex:1, marginTop:10}}
                          />
                      </View>
                  );
              }
          }
      )
      return (
          <View style={{flex:1}}>
            <Temp/>
              <ConfigModal
                  open                = {this.state.modal}
                  offset              = {0}
                  overlayBackground   = {'rgba(0, 0, 0, 0.75)'}
                  animationDuration   = {200}
                  animationTension    = {40}
                  closeOnTouchOutside = {false}
                  containerStyle      = {{justifyContent: 'center'}}
                  modalStyle          = {{flex:1,margin:0}}
                  disableOnBackPress  = {false}>

                  <TouchableOpacity style={{alignItems: 'center', marginTop:50}} onPress={()=>this.setState({modal:false})} >
                      <Text>MODAL Close</Text>
                  </TouchableOpacity>
              </ConfigModal>
          </View>
    );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
