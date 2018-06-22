import React, { Component } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview'
import { Actions } from 'react-native-router-flux'
import ShadowView from 'react-native-shadow-view'
import { connect } from 'react-redux'
import { gotoChatScreen, updatePartnerProfile } from '../../redux/actions'

const DeviceWidth = Dimensions.get('window').width
const DeviceHeight = Dimensions.get('window').height

const ViewTypes = {
  FULL: 0,
  HALF_LEFT: 1,
  HALF_RIGHT: 2
}

const containerCount = 0

/** *
 * To test out just copy this component and render in you root component
 */
class RecycleTestComponent extends React.Component {
  constructor(args) {
    super(args)

    const { width } = Dimensions.get('window')

    this._layoutProvider = new LayoutProvider(
      index => ViewTypes.FULL
      ,
      (type, dim) => {
        dim.width = width
        dim.height = 300
      }
    )

    this._rowRenderer = this._rowRenderer.bind(this)

    this.state = {

    }
  }

  _rowRenderer(type, data) {
    console.log('######## DATA #######')
    console.log(data)
    return (

      <ShadowView style={{

        height: 250,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: '#000',
        shadowOffset: {
          width: 0, height: 2
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        margin: 30
      }}
      >

        <TouchableOpacity onPress={() => this.props.gotoChatScreen(data)} style={{ width: DeviceWidth - 60, height: 250, alignItems: 'center' }} >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{
              flex: 1,
              height: 60,
              borderRadius: 10,
              backgroundColor: '#EC1F45',
              borderWidth: 1,
              borderColor: 'transparent',
              margin: 0.5,
              justifyContent: 'center',
              alignItems: 'flex-end'
            }}
            >
              <Text style={{
                color: 'white', fontWeight: 'bold', fontSize: 17, marginRight: 15
              }}
              >{data.username}
              </Text>

            </View>

          </View>
          <Text>Cell Id:  </Text>
          <Text>Data:  </Text>

          <Image
            source={require('../../assets/images/cat.png')}
            borderColor="white"
            borderWidth={1}
            borderRadius={30}
            style={{
              position: 'absolute', left: 10, top: 15, width: 60, height: 60
            }}
          />
          <View style={{
            position: 'absolute', left: 61, top: 56, width: 8, height: 8, borderRadius: 4, backgroundColor: '#2FED28'
          }}
          />
        </TouchableOpacity>
      </ShadowView>

    )
  }

  render() {
    return (<RecyclerListView
      style={{ width: DeviceWidth, height: DeviceHeight }}
      layoutProvider={this._layoutProvider}
      dataProvider={new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(this.props.peopleInfo)}
      rowRenderer={this._rowRenderer}
    />)
  }
}

const mapStateToProps = state => ({
  peopleInfo: state.people.peopleInfo
})

const mapDispatchToProps = dispatch =>
  ({
    gotoChatScreen(value) {
      dispatch(updatePartnerProfile(value))
      dispatch(gotoChatScreen())
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(RecycleTestComponent)
