import ACTION_TYPES from "./actionTypes"
import * as Api from "./../../api"
import { AsyncStorage } from "react-native"
import { Actions } from "react-native-router-flux"
import { i18n } from "./../../utils"

export const getAuthStorage = () => {
  return dispatch => {
    AsyncStorage.getItem("authData")
      .then(value => {
        const userData = JSON.parse(value);

        if (userData)    return userData
        else { // Request Guest ID
          fetch('http://beta.convose.com/users/guest', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }
          })
            .then(response => JSON.parse(response._bodyInit))
            .then(guestInfo => {
              dispatch(saveAuthStorage(guestInfo));
              return guestInfo
            })
            .catch(error =>  console.log(error))
        }
      })
      .then(userData => {
        dispatch({type:ACTION_TYPES.GET_AUTH_STORAGE,
                  payload:userData
        });
        dispatch(getAuthStorageSuccess());
        //dispatch(loginUserAuto(userData))
      })
      .catch(error => {
        console.log(error);
        dispatch(dispatch(getAuthStorageFailure()))
      })
  }
}




const saveAuthStorage= guestInfo => ({
  type: ACTION_TYPES.SAVE_AUTH_STORAGE,
  payload:guestInfo
})



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



export const changeSuggestions = suggestions =>
  ({
    type: ACTION_TYPES.CHANGE_SUGGESTIONS,
    payload: suggestions
  })

export const clearSuggestions = () =>
  ({
    type: ACTION_TYPES.CLEAR_SUGGESTIONS
  })

export const fetchSuggestion = value => dispatch => {

  dispatch({
    type: ACTION_TYPES.FETCH_SUGGESTIONS
  })


  fetch(`http://beta.convose.com/autocomplete/interests?q=${value}&limit=1000`)
    .then(response => response._bodyInit)
    .then(suggestions => {
      dispatch(changeSuggestions(JSON.parse(suggestions).autocomplete));

    })
    .catch(error => {

      console.log("####**********ERROR  ###****##");
      console.log(error.message);
    /*  dispatch(
        addError(error.message)
      )*/

      dispatch({
        type: ACTION_TYPES.CANCEL_FETCHING
      })

    })

}



export const clearSuggestion = ()=>({
  type:ACTION_TYPES.CLEAR_SUGGESTIONS
})
