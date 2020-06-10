import {combineReducers} from 'redux'
import initialized from './initialization'
import error from './error'
import admin from './admin'

export default combineReducers({initialized, admin, error})
