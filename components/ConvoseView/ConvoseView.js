import React from "react"
import PropTypes from "prop-types"
import {StyledView} from "./Styled"
import {Dimensions} from "react-native";

const DeviceHeight = Dimensions.get('window').height;
const DeviceWidth  = Dimensions.get('window').width ;


const ConvoseView = ({ children, ...styleProps }) => {
  return (
    <StyledView {...styleProps}>
      { children }
    </StyledView>
  )
}

ConvoseView.propTypes = {
  children: PropTypes.any,
  width: PropTypes.number,
  height: PropTypes.number,
  flexDirection:PropTypes.string
}

ConvoseView.defaultProps = {
  width: DeviceWidth,
  height: DeviceHeight,
  flexDirection:'column'
}

export default ConvoseView;
