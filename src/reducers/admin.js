import {ActionTypes} from '../constants'

const initialState = {
  info: null,
  token: null
}
export default (state = initialState, {type, payload}) => {
  switch (type) {
    // TODO: Profile view
    case ActionTypes.INIT_APP_END: {
      const {token} = payload
      return {
        ...state,
        token
      }
    }

    case ActionTypes.LOGIN_END: {
      const {payload: info, token} = payload.data
      return {
        ...state,
        info,
        token
      }
    }
    default:
      return state
  }
}
