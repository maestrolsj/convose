import React, { Component } from "react";
import { AppLoading, Font } from "expo"
import { Provider } from "react-redux"
import styled from "styled-components/native";
import configureStore from "./redux/store/configureStore";
import ConnectedRouter from "./router";

const store = configureStore()

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
            UbuntuBold: require("./assets/fonts/Ubuntu-Bold.ttf"),
            UbuntuRegular: require("./assets/fonts/Ubuntu-Regular.ttf"),
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
          <Provider store={store}>
            <ConnectedRouter/>
          </Provider>
        )
    }
}

const DefaultText = styled.Text`
   font-family: UbuntuRegular;
   font-size: 48px;
`
