import styled from "styled-components/native";

const StyledText = styled.Text`
   font-family: ${ props => props.isBold ? "UbuntuBold" : "UbuntuRegular" };
   font-size: ${ props => props.fontSize };
`

export {
  StyledText
}

