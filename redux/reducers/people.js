import ACTION_TYPES from "../actions/actionTypes"

const initialState = {
  peopleInfo: [],
}


export default function(state = initialState, action) {
    switch(action.type) {

        case ACTION_TYPES.SEARCH_PEOPLE:
         return{
           ...state,
           peopleInfo : action.payload
         }

        default:
            return state
    }
}
