import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Stack2Screen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.user}`,
    });
    render() {
        const { params } = this.props.navigation.state;
        return (
           <View><Text>Chat with {params.user}</Text></View>

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
