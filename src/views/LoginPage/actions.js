import {ActionTypes} from '../../constants'

export const onLoginSuccess = (adminInfo, token) => ({
  type: ActionTypes.LOGIN,
  payload: {adminInfo, token}
})
