import { createStore } from 'redux'
import rootReducer from '../reducers/membershipApplication'

const store = createStore(rootReducer)

export default store
