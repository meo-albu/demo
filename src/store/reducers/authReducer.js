
import types from '../actions/types'

const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

const defaultState = {
  user: user
}

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.LOGIN:
      localStorage.setItem('user', JSON.stringify(action.payload))
      return {
        ...state,
        user: action.payload,
      }
    case types.CHANGE_USER:
      localStorage.setItem('user', JSON.stringify(action.payload))
      return {
        ...state,
        user: action.payload,
      }
    case types.LOGOUT:
      localStorage.removeItem('user')
      return {
        ...state,
        user: null,
      }
    case types.REGISTER:
      localStorage.setItem('user', JSON.stringify(action.payload))
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}