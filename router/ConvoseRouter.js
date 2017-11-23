import React from "react"
import {Router, Scene, Stack, Drawer, Overlay,Actions} from "react-native-router-flux";
import {Chat, Home, Login, DrawerContent, Signup} from "../screens";

import MenuIcon from '../assets/images/menu_burger.png';

export default ConvoseRouter = () => (
  <Router>
    <Overlay key="overlay">

      <Stack
        hideNavBar
        key="root"
        titleStyle={{ alignSelf: 'center' }}
      >

        <Drawer
          key="drawer"
          contentComponent={DrawerContent}
          drawerImage={MenuIcon}
          drawerWidth={200}
          drawerPosition="right"
        >
          <Stack
            key="main"
            titleStyle={{ alignSelf: 'center' }}
          >
              <Scene key="home" component={Home}   title="Home"  initial/>
              <Scene key="login" component={Login} title="Login"/>
              <Scene key="signup" component={Signup} title="Signup"/>
              <Scene key="chat" component={Chat}   title="Chat"/>
          </Stack>
        </Drawer>
      </Stack>

    </Overlay>
  </Router>
)
