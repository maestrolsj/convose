import React from "react";
import PropTypes from "prop-types";
import { StyledText } from "./Styled";

const ConvoseText = ({ children, ...styleProps }) => {
  return (
    <StyledText {...styleProps}>
      {children}
    </StyledText>
  );
};

ConvoseText.propTypes = {
  children: PropTypes.any,
  fontSize: PropTypes.string,
  isBold: PropTypes.bool,
  color: PropTypes.string
};

ConvoseText.defaultProps = {
  fontSize: "24px",
  isBold: false,
  color: 'black'
};

export default ConvoseText;
