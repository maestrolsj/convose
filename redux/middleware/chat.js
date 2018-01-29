import ACTION_TYPES from "../actions/actionTypes"
import {Actions}    from "react-native-router-flux";

export default store => next => (action) => {
  let result = next(action)

  switch (action.type) {
    case ACTION_TYPES.GET_CHAT_CONTENT:

      Actions.chat();
      break


    default:
      break
  }

  return result
}
