import {combineReducers} from  'redux'
import authReducer from './authReducer'
import testReducer from './testReducer'
import {reducer} from 'redux-form'

export default combineReducers({
    auth:authReducer,
    form:reducer,
    test:testReducer
})