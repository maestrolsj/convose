import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, TextInput, StyleSheet, Keyboard, FlatList } from 'react-native';
import { Ionicons, Octicons } from '@expo/vector-icons';


/***
 * To test out just copy this component and render in you root component
 */


const DeviceWidth = Dimensions.get('window').width;


class SuggestionList extends React.Component {
  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(items) {
    const {
      updateProfile
    } = this.props;
    return (
      <TouchableOpacity style={{ height: 30, flex: 1, justifyContent: 'center', marginLeft: 50 }}
        onPress={() => updateProfile(this.props.userInfo.user)}>
        <Text>{items.item.text}   ({items.item.user_count})</Text>
      </TouchableOpacity>
    );
  }
  render() {
    const {
      fetchSuggestion,
      clearSuggestions
    } = this.props;

    // console.log("######## SUGGESTED ########");
    // console.log(this.props.isFetching);
    return (

      <View style={{ width: DeviceWidth }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white' }}>
          <Octicons name="search" size={17} color="gray" style={{ marginLeft: 15 }} />
          <TextInput style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType='default'
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
            onChangeText={(text) => {
              text ? fetchSuggestion(text) : clearSuggestions();
            }}
            returnKeyType="search"
            placeholder='Search Interest'
            underlineColorAndroid='transparent'
            placeholderTextColor='gray'
            autoFocus={true}

          />
        </View>
        <FlatList
          data={this.props.suggestedWords}
          renderItem={this.renderRow}
          style={{ position: 'absolute', top: 50, left: 0, width: DeviceWidth, height: 300 }}
          keyExtractor={(item, index) => index}
        />

      </View>
    );
  }
}

export default SuggestionList;

const styles = StyleSheet.create({

  input: {

    backgroundColor: 'white',
    color: 'black',
    width: DeviceWidth,
    height: 50,
    marginLeft: 10
  }
});
