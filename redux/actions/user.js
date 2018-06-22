import ACTION_TYPES from "./actionTypes"
import { AsyncStorage } from "react-native"
import * as Api from "./../../api"
import { i18n } from "./../../utils"
import * as fetch from './fetchResult'
import { searchPeople } from "./suggestion"
// Sign Up Process
const registerUser = values => (dispatch, getState) => {

  var obj = {
    token: getState().storage.userInfo.authentication_token,
    data: {
      user: {
        email: values.id,
        password: values.pwd,
        password_confirmation: values.confirm
      }
    }
  };

  Api.registerUser(obj)
    .then(data => {
      console.log('Sign ');  // FETCH MY NEW INFO
      console.log(data);
      if (data['error']) throw data['error']
      else {
        console.log('Sign Up Success');  // FETCH MY NEW INFO
      }
    })
    .catch((data) => {
      console.log(data);
      console.log('Sign Up Fail');  // FETCH MY NEW INFO
      dispatch({
        type: ACTION_TYPES.REGISTER_USER_ERROR,
        payload: data.error
      })

    })

}

const loginUser = values => {
  return dispatch => {
    dispatch(fetch.fetchInProgress())
    Api.fetchLogin(values)
      .then(data => {
        dispatch(fetch.fetchSuccess(i18n("API_LOGIN_SUCCESS")))
        dispatch(loginUserSuccess(data))
      })
      .catch(err => dispatch(fetch.fetchFailure(err.response)))
  }
}

const loginUserSuccess = payload => ({
  type: ACTION_TYPES.LOGIN_SUCCESS,
  payload,
})

const logoutUser = () => {
  // logout currently only removes user data from redux store and local storage
  return dispatch => {
    dispatch(fetch.fetchSuccess(i18n("API_LOGOUT_SUCCESS")))
    dispatch(logoutUserSuccess())
  }
}

const logoutUserSuccess = () => ({
  type: ACTION_TYPES.LOGOUT_SUCCESS,
})


const updateProfile = value => dispatch => {

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


const updatePartnerProfile = partnerInfo => dispatch => {
  dispatch(updatePartnerInfo(partnerInfo))
}

const updatePartnerInfo = value => ({
  type: ACTION_TYPES.UPDATE_PARTNERINFO,
  payload: value
})


export {
  registerUser,
  updateProfile
}