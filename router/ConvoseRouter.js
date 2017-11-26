import React from "react"
import {Router, Scene, Stack, Drawer, Overlay, Lightbox, Modal} from "react-native-router-flux";
import {Chat, Home, Login, DrawerContent, Signup, MoreBox, Profile, Search} from "../screens";
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';


export default ConvoseRouter = () => (
  <Router>
    <Overlay key="overlay">
      <Modal key="modal"
             hideNavBar
             transitionConfig={() => ({screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid})}
      >
        <Lightbox>
          <Stack
            hideNavBar
            key="root"
            titleStyle={{alignSelf: 'center'}}
          >

            <Drawer
              key="drawer"
              contentComponent={DrawerContent}
              drawerWidth={200}
              drawerPosition="right"
              hideDrawerButton={true}
            >
              <Stack
                key="main"
                titleStyle={{alignSelf: 'center'}}
              >
                <Scene key="home" component={Home} title="Home" initial/>
                <Scene key="login" component={Login} title="Login"/>
                <Scene key="signup" component={Signup} title="Signup"/>

              </Stack>
            </Drawer>
            <Scene key="chat" component={Chat} title="Chat"/>
          </Stack>

          <Scene key="morebox" component={MoreBox}/>
          <Scene key="profile" component={Profile}/>
        </Lightbox>

        <Stack
          hideNavBar
          key="search"
          titleStyle={{alignSelf: 'center'}}
        >
          <Scene key="searchModal" component={Search} title="SearchPage"/>
        </Stack>
      </Modal>
    </Overlay>
  </Router>
)
