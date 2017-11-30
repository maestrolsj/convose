import React, { Component } from "react";
import { View, Text, Dimensions ,TouchableOpacity} from "react-native";
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import {Actions} from "react-native-router-flux";
import ShadowView from 'react-native-shadow-view'

import {RowTouchableOpacity} from "./Styled"

const DeviceWidth  = Dimensions.get('window').width ;
const DeviceHeight  = Dimensions.get('window').height ;

const ViewTypes = {
  FULL: 0,
  HALF_LEFT: 1,
  HALF_RIGHT: 2
};

let containerCount = 0;


const CardUserData = [
  {
    avatar: '../images/cat.png',
    username:'John Snow',
    activity: true,
    cardtheme: 'THEME04',
    interests:
      [{content: 'English', proficiency: 0}, {content: 'French', proficiency: 0}, {content: 'Sing', proficiency: 0}, {content: 'Traveling', proficiency: 0}, {content: 'Hiking', proficiency: 0}, {content: 'Basketball', proficiency: 0}, {content: 'Gaming', proficiency: 0}, {content: 'Skiing', proficiency: 0},{content: 'Food', proficiency: 0}]
  },
  {
    avatar: '../images/dog.png',
    username:'Ishily Summer',
    activity: false,
    cardtheme: 'THEME06',
    interests:
      [{content: 'English', proficiency: 0}, {content: 'French', proficiency: 0}, {content: 'Sing', proficiency: 0}, {content: 'Traveling', proficiency: 0}, {content: 'Hiking', proficiency: 0}, {content: 'Basketball', proficiency: 0}, {content: 'Gaming', proficiency: 0}, {content: 'Skiing', proficiency: 0},{content: 'Food', proficiency: 0}]
  }
]

/***
 * To test out just copy this component and render in you root component
 */
export default class RecycleTestComponent extends React.Component {
  constructor(args) {
    super(args);

    let { width } = Dimensions.get("window");
    let dataProvider = new DataProvider((r1, r2) => {
      return r1 !== r2;
    });

    this._layoutProvider = new LayoutProvider(
      index =>  ViewTypes.FULL
    ,
      (type, dim) => {
        dim.width = width;
        dim.height = 300;

      }
    );

    this._rowRenderer = this._rowRenderer.bind(this);

    this.state = {
      dataProvider: dataProvider.cloneWithRows(this._generateArray(300))
    };
  }

  _generateArray(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
      arr[i] = i;
    }
    return arr;
  }

  _rowRenderer(type, data) {
    let containerId = containerCount++;

       return(

           <ShadowView style={{
             height    : 280,
             backgroundColor: 'white',
             borderRadius: 10,
             justifyContent: 'center',
             alignItems: 'center',

             shadowColor: '#000',
             shadowOffset: {
               width: 0, height: 2,
             },
             shadowOpacity: 0.3,
             shadowRadius: 4,
             margin:20
           }}>
             <TouchableOpacity onPress={()=>Actions.chat()} style={{width:DeviceWidth-20,height:280,justifyContent:'center', alignItems:'center'}} >
               <Text>Cell Id: {containerId}</Text>
               <Text>Data: {data}</Text>
             </TouchableOpacity>
           </ShadowView>


        )
  }

  render() {
    return <RecyclerListView style={{width:DeviceWidth, height:DeviceHeight}}
      layoutProvider={this._layoutProvider} dataProvider={this.state.dataProvider} rowRenderer={this._rowRenderer} />
  }
}

