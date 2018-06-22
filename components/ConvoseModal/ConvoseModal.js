import React from "react"
import PropTypes from "prop-types"
import { StyledView } from "./Styled"
import { Dimensions } from "react-native";

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;


const ConvoseModal = ({ children, ...styleProps }) => {
  return (
    <StyledView {...styleProps}>
      {children}
    </StyledView>
  )
}

ConvoseModal.propTypes = {
  children: PropTypes.any,
  width: PropTypes.number,
  height: PropTypes.number,
  flexDirection: PropTypes.string
}

ConvoseModal.defaultProps = {
  position: 'absolute',
  width: DeviceWidth,
  height: DeviceHeight,
  backgroundColor: 'transparent'
}

export default ConvoseModal;
