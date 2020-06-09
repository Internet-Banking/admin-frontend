import {combineReducers} from 'redux'
// import todoList from './todoList'
// import todoMap from './todoMap'
// import visibilityFilter from './visibilityFilter'
import initialized from './initialization'
import error from './error'
import admin from './admin'

export default combineReducers({initialized, admin, error})
