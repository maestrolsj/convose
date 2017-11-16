import ACTION_TYPES from "./actionTypes"
import * as Api from "./../../api"
import { AsyncStorage } from "react-native"
import { Actions } from "react-native-router-flux"
import { i18n } from "./../../utils"

export const getAuthStorage = () => {
  return dispatch => {
    AsyncStorage.getItem("authData")
      .then(value => {
        const userData = JSON.parse(value)
        if (userData) {
          return userData
        }
        else {
          throw new Error("no authData")
        }
      })
      .then(userData => {
        console.log("loaded userData: ", userData)
        dispatch(dispatch(getAuthStorageSuccess()))
        dispatch(loginUserAuto(userData))
      })
      .catch(error => {
        dispatch(dispatch(getAuthStorageFailure()))
      })
  }
}

const getAuthStorageSuccess= () => ({
  type: ACTION_TYPES.GET_AUTH_STORAGE_SUCCESS,
})

const getAuthStorageFailure = () => ({
  type: ACTION_TYPES.GET_AUTH_STORAGE_FAILURE,
})

const fetchInProgress = () => ({
  type: ACTION_TYPES.FETCH_IN_PROGRESS,
})

const fetchSuccess = success => ({
  type: ACTION_TYPES.FETCH_SUCCESS,
  success,
})

const fetchFailure = error => ({
  type: ACTION_TYPES.FETCH_FAILURE,
  error,
})

export const loginUser = values => {
  return dispatch => {
    dispatch(fetchInProgress())
    Api.fetchLogin(values)
      .then(data => {
        dispatch(fetchSuccess(i18n("API_LOGIN_SUCCESS")))
        dispatch(loginUserSuccess(data))
      })
      .catch(err => dispatch(fetchFailure(err.response)))
  }
}

const loginUserSuccess = payload => ({
  type: ACTION_TYPES.LOGIN_SUCCESS,
  payload,
})

export const logoutUser = () => {
  // logout currently only removes user data from redux store and local storage
  return dispatch => {
    dispatch(fetchSuccess(i18n("API_LOGOUT_SUCCESS")))
    dispatch(logoutUserSuccess())
  }
}

const logoutUserSuccess = () => ({
  type: ACTION_TYPES.LOGOUT_SUCCESS,
})
