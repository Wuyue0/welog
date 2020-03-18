import { combineReducers } from 'redux'

import login from './login'

const rootReducer = {
  login,
}

export const createReducer = asyncReducers => combineReducers({
  ...rootReducer,
  ...asyncReducers,
})

export default combineReducers(rootReducer)