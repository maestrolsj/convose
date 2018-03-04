import { combineReducers }    from "redux"
import { reducer as form }    from "redux-form"
import auth                   from "./auth"
import network                from "./network"
import routes                 from "./routes"
import storage                from "./storage"
import people                 from "./people"
import chat                   from "./chat"
import register               from "./register"
import {fetching,suggestions} from "./suggest"

export default combineReducers({
  auth,
  form,
  network,
  routes,
  storage,
  suggestedWords: combineReducers({
     fetching,
     suggestions
  }),
  people,
  chat,
  register,
})

export const getAuth    = ({ auth })    => auth
export const getNetwork = ({ network }) => network
export const getRoutes  = ({ routes })  => routes
export const getStorage = ({ storage }) => storage
export const getRegister = ({ register}) => register
