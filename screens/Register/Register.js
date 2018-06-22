import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { FontAwesome, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { Screen, ConvoseText } from '../../components/'

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7'
  },
  loginContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },

  input: {
    height: 40,
    width: 200,
    backgroundColor: 'rgba(93,194,170,0.2)',
    marginBottom: 10,
    padding: 10,

    color: '#fff'
  },
  buttonContainer: {
    backgroundColor: 'gray',
    paddingVertical: 15,
    width: 200
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },
  appTitle: { marginLeft: 15, fontSize: 20, color: 'gray', fontWeight: 'bold' }
})



class Register extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      pwd: ''
    }
  }

  render() {
    console.log('#########')

    console.log(this.props.errorMsg)
    return (
      <Screen>

        <ConvoseText style={{ color: '#353535', fontWeight: 'bold', marginBottom: 50, fontSize: 25 }}>Register</ConvoseText>

        <TextInput style={styles.input}
          autoCapitalize="none"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCorrect={false}
          keyboardType='email-address'
          onChangeText={(val) => { this.setState({ id: val }) }}
          returnKeyType="next"
          placeholder='아이디'
          underlineColorAndroid='transparent'
          placeholderTextColor='rgba(93,194,170,0.7)' />

        <TextInput style={styles.input}
          returnKeyType="go"
          ref={(input) => this.passwordInput = input}
          placeholder='패스워드'
          placeholderTextColor='rgba(93,194,170,0.7)'
          underlineColorAndroid='transparent'
          onChangeText={(val) => { this.setState({ pwd: val }) }}
          secureTextEntry />
        <TouchableOpacity style={styles.buttonContainer}
          onPress={() => this.props.registerUser({
            id: this.state.id,
            pwd: this.state.pwd,
            confirm: this.state.pwd
          })}>
          <Text>{this.props.errorMsg}</Text>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </Screen>
    )
  }
}

export default Register
