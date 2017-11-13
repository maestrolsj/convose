import React, { Component } from 'react';
import { AppLoading, Font } from 'expo'
import styled from 'styled-components/native';

export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
        }
    }

    componentWillMount() {
        this._loadAssetsAsync()
    }

    _loadAssetsAsync = async () => {
        await Font.loadAsync({
            UbuntuBold: require('./assets/fonts/Ubuntu-Bold.ttf'),
            UbuntuRegular: require('./assets/fonts/Ubuntu-Regular.ttf'),
        })
        this.setState({
            loaded: true,
        })
    }

    render() {

        if (!this.state.loaded) {
            return (
                <AppLoading/>
            )
        }

        return (
            <MainView>
                <DefaultText>Convose App</DefaultText>
            </MainView>
        )
    }
}


const MainView = styled.View`
  flex: 1;
  background-color: red;
  align-items: center;
  justify-content: center;
`;

const DefaultText = styled.Text`
   font-family: UbuntuRegular;
   font-size: 48px;
`
