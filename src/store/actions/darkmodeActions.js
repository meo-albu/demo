import types from './types'

export const setDarkMode = () => {
  return {
    type: types.DARK_MODE,
  }
}

export const setLightMode = () => {
  return {
    type: types.LIGHT_MODE,
  }
}