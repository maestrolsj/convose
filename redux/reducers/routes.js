import { ActionConst } from "react-native-router-flux"

const initialState = {
  scene: {},
}

export default function reducer(state = initialState, {type, scene}) {
  switch (type) {
    // focus action is dispatched when a new screen comes into focus
    case ActionConst.FOCUS:
      return {
        ...state,
        scene: scene,
      }

    default:
      return state
  }
}
