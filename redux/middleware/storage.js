import { AsyncStorage } from "react-native"
import ACTION_TYPES from "../actions/actionTypes"

export default store => next => (action) => {
  let result = next(action)

  switch (action.type) {

    case ACTION_TYPES.LOGIN_SUCCESS:
    case ACTION_TYPES.CHANGE_PASSWORD_SUCCESS:
      const {
        username,
        password,
      } = action.payload && action.payload.user
      const authData = {
        username,
        password,
      }
      console.log("store Auth Data: ", authData)
      AsyncStorage.setItem("authData", JSON.stringify(authData))
      break

    case ACTION_TYPES.LOGOUT_SUCCESS:
      AsyncStorage.removeItem("authData")
      break

    default:
      break
  }

  return result
}
