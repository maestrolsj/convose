import ACTION_TYPES from "../actions/actionTypes"

const initialState = {
  errorMsg:''
}


export default function(state = initialState, action) {
    switch(action.type) {
        case ACTION_TYPES.REGISTER_USER_ERROR:
          console.log("REGISTER #>>>>>>>");
          console.log(action.payload);
         return{
             ...state,
             errorMsg : action.payload
         }

        default:
            return state
    }
}
