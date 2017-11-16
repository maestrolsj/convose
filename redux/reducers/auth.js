import ACTION_TYPES from "../actions/actionTypes"

const initialState = {
  userData: {},
  isLoggedIn: false,
  token: null,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ACTION_TYPES.LOGIN_SUCCESS:
    case ACTION_TYPES.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoggedIn: action.payload && action.payload.logged_in,
        userData: action.payload && action.payload.user,
        token: action.payload && action.payload.token,
      }
    case ACTION_TYPES.LOGOUT_SUCCESS:
      return {
        ...initialState
      }
    default:
      return state
  }
}
