import styled from "styled-components/native";

const StyledText = styled.Text`
   font-family: ${ props => props.isBold ? "UbuntuBold" : "UbuntuRegular"};
   font-size : ${ props => props.fontSize};
   color     : ${ props => props.color};
`

export {
  StyledText
}

