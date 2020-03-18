import { combineReducers } from 'redux'

import loginReducer from './login'

const rootReducer = combineReducers({
  loginReducer
})
export const createReducer = asyncReducers => combineReducers({
  ...rootReducer,
  ...asyncReducers,
})

export default rootReducer