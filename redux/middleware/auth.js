import ACTION_TYPES from "../actions/actionTypes"
import { Actions as RouterActions } from "react-native-router-flux"

export default store => next => (action) => {
  let result = next(action)

  switch (action.type) {
    case ACTION_TYPES.LOGIN_SUCCESS:
      // do a router action here
      break

    case ACTION_TYPES.LOGOUT_SUCCESS:
      // do a router action here
      break

    default:
      break
  }

  return result
}
