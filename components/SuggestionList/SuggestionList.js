import React, { Component } from "react";
import { View, Text, Dimensions ,TouchableOpacity, TextInput, StyleSheet, Keyboard,FlatList} from "react-native";
import {connect}            from 'react-redux'              ;
import {fetchSuggestion, clearSuggestions, updateProfile} from "../../redux/actions";
import { Ionicons,Octicons } from '@expo/vector-icons';


/***
 * To test out just copy this component and render in you root component
 */


const DeviceWidth  = Dimensions.get('window').width ;


class SuggestionList extends React.Component {


  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }


  renderRow(items) {
    return (
      <TouchableOpacity style={{height:30,flex:1, justifyContent:'center', marginLeft:50}}
                        onPress={()=>this.props.onUpdateProfile(this.props.userInfo)}>
        <Text>{items.item.text}   ({items.item.user_count})</Text>
      </TouchableOpacity>
    )
  }
    render()
    {
      return (

        <View style={{width:DeviceWidth}}>
          <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'white'}}>
            <Octicons name="search" size={17} color="gray" style={{marginLeft:15}}/>
            <TextInput style                 = {styles.input}
                       autoCapitalize        = "none"
                       autoCorrect           = {false}
                       keyboardType          = 'default'
                       onSubmitEditing       = {() => { Keyboard.dismiss(); }}
                       onChangeText          = {(text) => this.props.onChange(text) }
                       returnKeyType         = "search"
                       placeholder           = 'Search Interest'
                       underlineColorAndroid = 'transparent'
                       placeholderTextColor  = 'gray'
                       autoFocus             = {true}


            />
          </View>
          <FlatList
            data       = {this.props.suggestedWords.suggestions}
            renderItem = {this.renderRow}
            style={{position:'absolute',top:50,left:0, width:DeviceWidth,height:300}}
            keyExtractor          = {(item, index) => index}
          />

        </View>
      )
    }

}

const mapStateToProps = (state) => ({
  suggestedWords: state.suggestedWords,
  userInfo      : state.storage.userInfo
});


const mapDispatchToProps = dispatch => ({

    onChange(value) {
      if (value) {
        dispatch(
        // fe(value)
          fetchSuggestion(value)
        )
      } else {
        dispatch(
          clearSuggestions()
        )
      }
    },
    onClear() {
      dispatch(
        clearSuggestions()
      )
    },
    onUpdateProfile(userinfo){
      dispatch(
        updateProfile(userinfo)
      )
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(SuggestionList)



const styles = StyleSheet.create({

  input:{

    backgroundColor: 'white',
    color: 'black',
    width:DeviceWidth,
    height:50,
    marginLeft:10
  }
});
