import React from "react"
import { ScrollView } from "react-native"
import PropTypes from "prop-types"
import {StyledView} from "./Styled"

const Screen = ({ children }) => {
  return (
    <StyledView>
      <ScrollView keyboardShouldPersistTaps={"handled"}>
        { children }
      </ScrollView>
    </StyledView>
  )
}

Screen.propTypes = {
  children: PropTypes.any,
}

export default Screen;
