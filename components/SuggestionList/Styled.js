import styled from "styled-components/native";
import { StyleConst } from '../../const'

const { COLORS, TRANSITION } = StyleConst
const StyledView = styled.View`
  flex: 1;
  background-color: red;
  align-items: center;
  justify-content: center;
`;


const RowTouchableOpacity = styled.TouchableOpacity`
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${COLORS.CARD_BACKGROUND};
    borderRadius:2;
`

export {
  StyledView,
  RowTouchableOpacity
}

