import React from "react"
import PropTypes from "prop-types"
import { StyledView } from "./Styled"
import { Dimensions } from "react-native";

const DeviceWidth = Dimensions.get('window').width;


const ConvoseNavbar = ({ children, ...styleProps }) => {
  return (
    <StyledView {...styleProps}>
      {children}
    </StyledView>
  )
}

ConvoseNavbar.propTypes = {
  children: PropTypes.any,
  width: PropTypes.number,
  height: PropTypes.number,
  flexDirection: PropTypes.string
}

ConvoseNavbar.defaultProps = {
  width: DeviceWidth,
  height: 50,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
}

export default ConvoseNavbar;
