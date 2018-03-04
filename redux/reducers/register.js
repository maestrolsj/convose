import ACTION_TYPES from "../actions/actionTypes"

const initialState = {
  errorMsg:''
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ACTION_TYPES.REGISTER_USER_ERROR:
      const errorMsg = action.payload.errorMsg
      console.log("REGISTER #>>>>>>>");
      console.log(errorMsg);
      return {
         ...state,
         errorMsg,
      }


    default:
      return state
  }
}
