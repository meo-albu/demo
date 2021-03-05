import types from './types'

export const login = (user) => {
  return {
    type: types.LOGIN,
    payload: user
  }
}

export const register = (user) => {
  return {
    type: types.REGISTER,
    payload: user
  }
}

export const changeUser = (user) => {
  return {
    type: types.CHANGE_USER,
    payload: user
  }
}

export const logout = () => {
  return {
    type: types.LOGOUT,
  }
}