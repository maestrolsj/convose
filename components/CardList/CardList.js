import React, { Component } from "react";
import { View, Text, Dimensions ,TouchableOpacity} from "react-native";
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import {Actions} from "react-native-router-flux";

import {RowTouchableOpacity} from "./Styled"

const DeviceWidth  = Dimensions.get('window').width ;
const ViewTypes = {
  FULL: 0,
  HALF_LEFT: 1,
  HALF_RIGHT: 2
};

let containerCount = 0;



/***
 * To test out just copy this component and render in you root component
 */
export default class RecycleTestComponent extends React.Component {
  constructor(args) {
    super(args);

    let { width } = Dimensions.get("window");

    //Create the data provider and provide method which takes in two rows of data and return if those two are different or not.
    //THIS IS VERY IMPORTANT, FORGET PERFORMANCE IF THIS IS MESSED UP
    let dataProvider = new DataProvider((r1, r2) => {
      return r1 !== r2;
    });

    //Create the layout provider
    //First method: Given an index return the type of item e.g ListItemType1, ListItemType2 in case you have variety of items in your list/grid
    //Second: Given a type and object set the exact height and width for that type on given object, if you're using non deterministic rendering provide close estimates
    //If you need data based check you can access your data provider here
    //You'll need data in most cases, we don't provide it by default to enable things like data virtualization in the future
    //NOTE: For complex lists LayoutProvider will also be complex it would then make sense to move it to a different file
    this._layoutProvider = new LayoutProvider(
      index =>  ViewTypes.FULL
    ,
      (type, dim) => {
        dim.width = width;
        dim.height = 140;

      }
    );

    this._rowRenderer = this._rowRenderer.bind(this);

    //Since component should always render once data has changed, make data provider part of the state
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

  //Given type and data return the view component
  _rowRenderer(type, data) {
    //You can return any view here, CellContainer has no special significance
    let containerId = containerCount++;

       return(
       <RowTouchableOpacity onPress={()=>Actions.chat()} >
         <Text>Cell Id: {containerId}</Text>
         <Text>Data: {data}</Text>
       </RowTouchableOpacity>

        )
  }

  render() {
    return <RecyclerListView style={{width:DeviceWidth, height:300}}
      layoutProvider={this._layoutProvider} dataProvider={this.state.dataProvider} rowRenderer={this._rowRenderer} />
  }
}

