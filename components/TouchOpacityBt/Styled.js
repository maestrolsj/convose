import styled from "styled-components/native";

const StyledOpacity = styled.TouchableOpacity`
   flex           : ${ props => props.flex };
   flexDirection  : ${ props => props.flexDirection };
   backgroundColor: ${ props => props.backgroundColor };
   alignItems     : ${ props => props.alignItems };
   justifyContent : ${ props => props.justifyContent };
`

export {
  StyledOpacity
}

