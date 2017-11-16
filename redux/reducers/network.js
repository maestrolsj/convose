import ACTION_TYPES from "../actions/actionTypes"
import { ActionConst as ROUTER_ACTION_TYPES } from "react-native-router-flux"

const initialState = {
  isFetching: false,
  fetchError: false,
  fetchSuccess: false,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ACTION_TYPES.FETCH_IN_PROGRESS:
      return {
        ...state,
        isFetching: true,
        fetchError: false,
        fetchSuccess: false,
      }
    case ACTION_TYPES.FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        fetchError: action.error,
        fetchSuccess: false,
      }
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetchError: false,
        fetchSuccess: action.success,
      }
    case ROUTER_ACTION_TYPES.FOCUS:
      return {
        ...initialState
      }
    default:
      return state
  }
}
