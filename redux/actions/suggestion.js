import ACTION_TYPES from './actionTypes'
import { AsyncStorage } from 'react-native'
import * as Api from './../../api'
import * as fetch from './fetchResult'


const changeSuggestions = suggestedWords =>
  ({
    type: ACTION_TYPES.CHANGE_SUGGESTIONS,
    payload: suggestedWords
  })

const clearSuggestions = () =>
  ({
    type: ACTION_TYPES.CLEAR_SUGGESTIONS
  })

const fetchSuggestion = value => (dispatch) => {
  dispatch(fetch.fetchInProgress())

  const parm = `?q=${value}&limit=1000`

  Api.fetchSuggestion(parm)
    .then((suggestions) => {
      dispatch(changeSuggestions(suggestions.autocomplete))
      dispatch(fetch.fetchSuccess())
    })
    .catch(error => dispatch(fetch.fetchFailure(error)))
};

const clearSuggestion = () => ({
  type: ACTION_TYPES.CLEAR_SUGGESTIONS
})

const updatePeopleList = peopleInfo => ({
  type: ACTION_TYPES.SEARCH_PEOPLE,
  payload: peopleInfo
})

const searchPeople = value => (dispatch) => {
  Api.fetchPeople(value.authentication_token)
    .then(r => dispatch(updatePeopleList(r.suggestions)))
}

export {
  changeSuggestions,
  fetchSuggestion,
  searchPeople,
  updatePeopleList
}
