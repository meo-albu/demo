
import types from '../actions/types'

if(!localStorage.getItem('darkmode')) {
  if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    localStorage.setItem('darkmode', true)
  }
}

const dark = localStorage.getItem('darkmode') ? JSON.parse(localStorage.getItem('darkmode')) : false

const defaultState = {
  darkmode: dark
}

export const darkmodeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.DARK_MODE:
      localStorage.setItem('darkmode', true)
      return {
        ...state,
        darkmode: true,
      }
    case types.LIGHT_MODE:
      localStorage.setItem('darkmode', false)
      return {
        ...state,
        darkmode: false,
      }
    default:
      return state
  }
}