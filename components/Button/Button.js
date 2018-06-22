import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledWrapper } from './Styled';

const Button = ({ children, onClick, ...otherProps }) => (
  <StyledWrapper onPress={onClick} {...otherProps}>
    <StyledButton {...otherProps}>
      {children}
    </StyledButton>
  </StyledWrapper>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  small: PropTypes.bool
};

Button.defaultProps = {
  primary: false,
  small: false
};

export default Button;
