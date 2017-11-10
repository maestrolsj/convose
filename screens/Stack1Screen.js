import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


export default class Stack1Screen extends React.Component {

    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../img/home.png')}
                style={[styles.icon, {tintColor: "gold"}]}
            />
        ),
    };

    constructor(props){
        super(props);

    }

    render() {
        const { navigate } = this.props.navigation;

        return (
           <View><Text style={{backgroundColor:'gold'}}>First Screen@!</Text>
               <Button
                   onPress={() => navigate('Stack2Screen', { user: 'Lucy' })}
                   title="Go to Second Screen"
               />

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
