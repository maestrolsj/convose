// @flow
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import promise from "redux-promise"
import logger from "redux-logger"
import { auth, storage } from "../middleware"
import reducers from "../reducers"

export default function configureStore(initialState = {}) {
  const enhancers = [applyMiddleware(thunk, promise, logger, auth, storage)]
  return createStore(reducers, initialState, compose(...enhancers))
}
