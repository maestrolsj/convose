import ACTION_TYPES from "../actions/actionTypes"

const initialState = {
  chatContent: [],
  partnerInfo:{}
}


export default function(state = initialState, action) {
    switch(action.type) {

        case ACTION_TYPES.GET_CHAT_CONTENT:
         return{
           ...state,
           chatContent : action.payload
         }

      case ACTION_TYPES.UPDATE_PARTNERINFO:
        return{
          ...state,
          partnerInfo : action.payload
        }

        default:
            return state
    }
}
