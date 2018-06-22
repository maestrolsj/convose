import ACTION_TYPES from "../actions/actionTypes"

const initialState = {
    authStorageLoaded: false,
    authStorageError: false,
    userInfo: {}
}

export default function (state = initialState, action) {
    switch (action.type) {

        case ACTION_TYPES.GET_AUTH_STORAGE:
            return {
                ...state,
                userInfo: action.payload
            }
        case ACTION_TYPES.GET_AUTH_STORAGE_SUCCESS:
            return {
                ...state,
                authStorageLoaded: true,
            }
        case ACTION_TYPES.GET_AUTH_STORAGE_FAILURE:
            return {
                authStorageLoaded: true,
                authStorageError: true,
            }

        case ACTION_TYPES.LOGOUT_SUCCESS:
            return {
                ...initialState,
            }
            break
        default:
            return state
    }
}
