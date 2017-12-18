import React, { Component } from "react";
import { View, Text, Dimensions ,TouchableOpacity, TextInput, StyleSheet, Keyboard,FlatList} from "react-native";
import {connect}            from 'react-redux'              ;
import {fetchSuggestion, clearSuggestions} from "../../redux/actions";
import { Ionicons,Octicons } from '@expo/vector-icons';


/***
 * To test out just copy this component and render in you root component
 */



const DeviceWidth  = Dimensions.get('window').width ;


class SuggestionList extends React.Component {
  constructor(args) {
    super(args);
  }


  renderRow(items) {
    return (
      <View style={{height:30,flex:1, justifyContent:'center', marginLeft:100}}>
      <Text>{items.item}</Text>
      </View>
    )
  }
    render()
    {
      return (

        <View>
          <View style={{flexDirection:'row', backgroundColor:'white', justifyContent:'center',alignItems:'center'}}>
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
  suggestedWords: state.suggestedWords
});


const mapDispatchToProps = dispatch =>
  ({

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
