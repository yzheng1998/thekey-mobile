import membershipApplicationReducer from '../reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({ membershipApplicationReducer })

export default (state, action) => rootReducer(state, action)
