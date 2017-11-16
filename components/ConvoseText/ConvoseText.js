import React from "react"
import PropTypes from "prop-types"
import {StyledText} from "./Styled"

const ConvoseText = ({ children, ...styleProps }) => {
  return (
    <StyledText {...styleProps}>
      { children }
    </StyledText>
  )
}

ConvoseText.propTypes = {
  children: PropTypes.any,
  fontSize: PropTypes.string,
  isBold: PropTypes.bool,
}

ConvoseText.defaultProps = {
  fontSize: "24px",
  isBold: false,
}

export default ConvoseText;
