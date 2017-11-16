import { combineReducers } from "redux"
import { reducer as form } from "redux-form"
import auth from "./auth"
import network from "./network"
import routes from "./routes"
import storage from "./storage"

export default combineReducers({
  auth,
  form,
  network,
  routes,
  storage,
})

export const getAuth = ({ auth }) => auth
export const getNetwork = ({ network }) => network
export const getRoutes = ({ routes }) => routes
export const getStorage = ({ storage }) => storage
