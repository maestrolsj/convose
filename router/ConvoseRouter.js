import React from "react"
import {Router, Scene, Stack} from "react-native-router-flux";
import {Chat, Home, Login} from "../screens";

export default ConvoseRouter = () => (
  <Router>
    <Stack key="root">
      <Scene key="home" component={Home}/>
      <Scene key="login" component={Login} title="Login"/>
      <Scene key="chat" component={Chat} title="Chat"/>
    </Stack>
  </Router>
)
