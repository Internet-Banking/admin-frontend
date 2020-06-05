import {LOGIN_SUCCESS} from '../../constants'

export const onLoginSuccess = (adminInfo, token) => ({
  type: LOGIN_SUCCESS,
  payload: {adminInfo, token}
})
