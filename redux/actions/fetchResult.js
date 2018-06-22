import ACTION_TYPES from './actionTypes'
import { AsyncStorage } from 'react-native'
import * as Api from './../../api'

const fetchInProgress = () => ({
  type: ACTION_TYPES.FETCH_IN_PROGRESS
})

const fetchSuccess = success => ({
  type: ACTION_TYPES.FETCH_SUCCESS,
  success
})

const fetchFailure = error => ({
  type: ACTION_TYPES.FETCH_FAILURE,
  error
})

export {
  fetchInProgress,
  fetchSuccess,
  fetchFailure
}
