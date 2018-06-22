import ACTION_TYPES from './actionTypes';
import * as Api from './../../api';

import { Actions } from 'react-native-router-flux';
import { i18n } from './../../utils';
import { getAuthStorage, saveAuthStorage } from './storage';
import { searchPeople, updatePeopleList, fetchSuggestion, clearSuggestions } from './suggestion';

import { updateProfile, registerUser } from './user';


export {
  getAuthStorage,
  saveAuthStorage,
  fetchSuggestion,
  updateProfile,
  searchPeople,
  updatePeopleList,
  clearSuggestions,
  registerUser,
};

