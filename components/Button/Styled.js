import styled from "styled-components/native"
import { StyleConst } from '../../const'

const { COLORS, FONT, FONT_SIZES } = StyleConst

const StyledWrapper = styled.TouchableOpacity`
  backgroundColor: ${ props => props.primary ? COLORS.PRIMARY : 'white' };
  border: ${ props => props.primary ? 0 : `1px solid ${COLORS.PRIMARY}`};
  borderRadius: 4px;
  justify-content: center;
  align-items: center;
  height: ${ props => props.small ? '30px' : '45px'};
  min-width: 120px;
`

const StyledButton = styled.Text`
  ${FONT.DEFAULT};
  color: ${props => props.primary ? COLORS.TEXT_BRIGHT : COLORS.PRIMARY };
  padding: 0 12px;
  fontSize: ${ props => props.small ? FONT_SIZES.S : FONT_SIZES.L};
`

export {
  StyledWrapper,
  StyledButton,
}
