import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';
import SuggestionList from '../../components/SuggestionList';
import { Screen, TouchOpacityBt, ConvoseText } from '../../components/';
import { FontAwesome, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

export default class extends React.Component {
  componentDidMount() {
    console.log('##### DID MOUNT #####')
  }

  render() {
    return (
      <Screen style={{ justifyContent: 'flex-start' }} >

        <SuggestionList />
        <TouchableOpacity style={{ marginTop: 300 }} onPress={() => {
          Keyboard.dismiss()
          Actions.pop()
        }}>
          <Text>close</Text>
        </TouchableOpacity>

      </Screen>
    )
  }
}
