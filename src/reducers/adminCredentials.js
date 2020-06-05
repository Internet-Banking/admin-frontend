import {LOGIN_SUCCESS} from '../constants'

const defaultState = {}

const adminCredentials = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      const {adminInfo, token} = action.payload
      return {adminInfo, token}
    }
    default:
      return state
  }
}

export default adminCredentials
