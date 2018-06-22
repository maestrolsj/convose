import ACTION_TYPES from "../actions/actionTypes"

const initialState = {
  suggestedWords :[]
}

export default function(state=initialState, action)  {

  switch(action.type) {

    case ACTION_TYPES.CLEAR_SUGGESTIONS :
      return {
        ...state,
        suggestedWords:[]
      }

    case ACTION_TYPES.CHANGE_SUGGESTIONS :
      return {
        ...state,
        suggestedWords:action.payload
      }

    default : return state
  }

}
