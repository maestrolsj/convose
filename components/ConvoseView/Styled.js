import styled from 'styled-components/native'

const StyledView = styled.View`
   width: ${props => props.width};
   height: ${props => props.height};
   flexDirection: ${props => props.flexDirection};
`

export {
  StyledView
}
