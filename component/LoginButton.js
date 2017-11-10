import React from 'react';
import { StyleSheet, Text, View,Button,Image , TouchableOpacity} from 'react-native';
import StyleConst from '../const/StyleConst';



export default class LoginButton extends React.Component {

    constructor(props){
        super(props);

    }
    render() {
        return (
            <View style={[styles.loginbutton, this.props.style]}>
                <Text style={styles.text}>{`Sign
Up`}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginbutton: {
      //  backgroundColor: StyleConst.COLORS.PRIMARY,
        borderRadius   : 5,
        borderColor:StyleConst.COLORS.PRIMARY,
        borderWidth:1,
        height:30

    },
    text:{
        color:StyleConst.COLORS.PRIMARY,
        fontWeight:'bold',
        margin:0,
        padding:0

    }
});
