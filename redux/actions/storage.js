import ACTION_TYPES from './actionTypes'
import { AsyncStorage } from 'react-native'
import * as Api from './../../api'

const getAuthStorage = () => {
  return dispatch => {
    AsyncStorage.getItem('authData')
      .then(value => {
        const userData = JSON.parse(value)

        if (userData) return userData
        else { // Request Guest ID
          Api.fetchGuestInfo()
            .then(guestInfo => {
              dispatch(saveAuthStorage(guestInfo))
              return guestInfo
            })
            .catch(error => console.log(error))
        }
      })
      .then(userData => {
        dispatch({
          type: ACTION_TYPES.GET_AUTH_STORAGE,
          payload: userData
        })
        dispatch(getAuthStorageSuccess())
        //dispatch(loginUserAuto(userData))
      })
      .catch(error => {
        console.log(error)
        dispatch(dispatch(getAuthStorageFailure()))
      })
  }
}


const saveAuthStorage = guestInfo => ({
  type: ACTION_TYPES.SAVE_AUTH_STORAGE,
  payload: guestInfo
})


const getAuthStorageSuccess = () => ({
  type: ACTION_TYPES.GET_AUTH_STORAGE_SUCCESS
})

const getAuthStorageFailure = () => ({
  type: ACTION_TYPES.GET_AUTH_STORAGE_FAILURE
})

export {
  getAuthStorage,
  saveAuthStorage,
  getAuthStorageSuccess,
  getAuthStorageFailure
}
