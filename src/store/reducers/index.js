import {combineReducers} from 'redux'
import {darkmodeReducer} from './darkmodeReducer'
import {authReducer} from './authReducer'

const rootReducer = combineReducers({
  darkmodeReducer,
  authReducer
})

export default rootReducer