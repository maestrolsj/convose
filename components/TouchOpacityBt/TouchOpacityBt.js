import React           from "react"
import PropTypes       from "prop-types"
import {StyledOpacity} from "./Styled"

const TouchOpacityBt = ({ children, ...otherProps }) => {
  return (
    <StyledOpacity {...otherProps}>
      { children }
    </StyledOpacity>
  )
}

TouchOpacityBt.propTypes = {
  children       : PropTypes.any,
  flex           :  PropTypes.number,
  flexDirection  :  PropTypes.string,
  backgroundColor:  PropTypes.string,
  alignItems     :  PropTypes.string,
  justifyContent :  PropTypes.string,
}

TouchOpacityBt.defaultProps = {
  flex: 1,
  flexDirection: 'column',
  alignItems : 'center',
  justifyContent :'center',
  backgroundColor:'white'
}

export default TouchOpacityBt;
