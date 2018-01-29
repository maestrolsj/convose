import React, { Component } from "react";
import { View, Text, Dimensions ,TouchableOpacity, Image} from "react-native";
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import {Actions} from "react-native-router-flux";
import {connect}            from 'react-redux'
import {getChatContent}     from "../../redux/actions";

const DeviceWidth  = Dimensions.get('window').width ;
const DeviceHeight  = Dimensions.get('window').height ;

const ViewTypes = {
  FULL: 0,
  HALF_LEFT: 1,
  HALF_RIGHT: 2
};

let containerCount = 0;




/***
 * To test out just copy this component and render in you root component
 */
class RecycleTestComponent extends React.Component {
  constructor(args) {
    super(args);

    this.props.getChatContentFromDB();
    let { width } = Dimensions.get("window");


    this._layoutProvider = new LayoutProvider(
      index =>  ViewTypes.FULL
    ,
      (type, dim) => {
        dim.width = width;
        dim.height = 50;

      }
    );

    this._rowRenderer = this._rowRenderer.bind(this);

    this.state = {

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
               <View style={{flex:1,flexDirection:'row'}}>
                  <Text>hello hello</Text>
               </View>
        )
  }




  render() {
    return <RecyclerListView style={{width:DeviceWidth, height:DeviceHeight}}
      layoutProvider={this._layoutProvider} dataProvider={new DataProvider((r1, r2) => { return r1 !== r2; }).cloneWithRows(this.props.peopleInfo)} rowRenderer={this._rowRenderer} />
  }
}


const mapStateToProps = (state) => ({
  peopleInfo : state.people.peopleInfo
});


const mapDispatchToProps = dispatch =>
  ({
    getChatContentFromDB() {
      dispatch( getChatContent())
    }
  })



export default connect(mapStateToProps, mapDispatchToProps)(RecycleTestComponent)

