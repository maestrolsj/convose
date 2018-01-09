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

          Api.fetchGuestInfo()
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
  });

  let parm = `?q=${value}&limit=1000`;

  Api.fetchSuggestion(parm)
    .then(suggestions =>  dispatch(changeSuggestions(suggestions.autocomplete))  )
    .catch(error => {
      dispatch({
        type: ACTION_TYPES.CANCEL_FETCHING
      })

    })

}

export const searchPeople  = value => dispatch =>{

  Api.fetchPeople(value.authentication_token)
    .then((r)=>dispatch(updatePeopleList(r.suggestions)))
    .catch(error => { })
}

const updatePeopleList= peopleInfo => ({
  type   : ACTION_TYPES.SEARCH_PEOPLE,
  payload:peopleInfo
})




export const updateProfile = value => dispatch =>{

/*
  fetch(`http://beta.convose.com/profile.json`,
    {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization : value.authentication_token
      },
      body: JSON.stringify({
        "profile": {
          "username": value.username,
          "passions": [
            {"name":"Languages","skill_level":0},
            {"name":"Sports","skill_level":3},
            {"name":"Dingsbums","skill_level":0}
          ],
          "proficiencies":[
            {"language_id":"Russian","level":3},
            {"language_id":"German","level":3},
            {"language_id":"English","level":3},
            {"language_id":"Korean","level":3}
          ]
        }
      }),
    }
  )
    .then(response => response._bodyInit)
    .then(suggestions => {
      dispatch(changeSuggestions(JSON.parse(suggestions).autocomplete));

    })
    .catch(error => {

      dispatch({
        type: ACTION_TYPES.CANCEL_FETCHING
      })

    })*/
  dispatch(searchPeople(value));


}

export const clearSuggestion = ()=>({
  type:ACTION_TYPES.CLEAR_SUGGESTIONS
})
