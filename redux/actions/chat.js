import ACTION_TYPES from './actionTypes'
import { AsyncStorage } from 'react-native'
import * as Api from './../../api'

const getChatContent = value => ({
  type: ACTION_TYPES.GET_CHAT_CONTENT,
  payload: value
})

const gotoChatScreen = partnerInfo => (dispatch, getState) => {
  var obj = {
    'userInfo': getState().storage.userInfo,
    'partnerInfo': getState().chat.partnerInfo
  }

  Api.fetchChatContent(obj)
    .then(content => {
      console.log('#### FETCH CHAT CONTENT ####')
      console.log(content)
      //dispatch(getChatContent(content))
    })

    .catch(error => console.log(error))
}

export {
  gotoChatScreen,
  getChatContent
}
