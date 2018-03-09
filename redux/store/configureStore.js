// @flow
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import promise from "redux-promise"
import logger from "redux-logger"
import { auth, storage,people } from "../middleware"
import reducers from "../reducers"

export default function configureStore(initialState = {}) {

  return applyMiddleware(thunk, promise, logger, auth, storage,people)(createStore)(reducers, initialState)

}
