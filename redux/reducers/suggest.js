import ACTION_TYPES from "../actions/actionTypes"




export const fetching = (state=false, action) => {

  switch(action.type) {

    case ACTION_TYPES.FETCH_SUGGESTIONS :
      console.log("FETCH_SUGGESTIONS REDUCER");
      return true

    case ACTION_TYPES.CANCEL_FETCHING :
      console.log("CANCEL_FETCHING REDUCER")
      return false

    case ACTION_TYPES.CHANGE_SUGGESTIONS :
      console.log("CHANGE_SUGGESTIONS REDUCER");
      return false

    default:
      return state
  }

}

export const suggestions = (state=[], action) => {

  switch(action.type) {

    case ACTION_TYPES.CLEAR_SUGGESTIONS :
      return []

    case ACTION_TYPES.CHANGE_SUGGESTIONS :
      console.log("*********&&&&&*********");
      console.log(action.payload);
      return action.payload

    default :
      return state
  }

}
