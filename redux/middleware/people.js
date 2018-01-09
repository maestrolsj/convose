import ACTION_TYPES from "../actions/actionTypes"
import {Actions}    from "react-native-router-flux";

export default store => next => (action) => {
  let result = next(action)

  switch (action.type) {
    case ACTION_TYPES.SEARCH_PEOPLE:

      Actions.home();
      break


    default:
      break
  }

  return result
}
