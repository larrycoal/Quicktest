import {combineReducers} from  'redux'
import authReducer from './authReducer'
import testReducer from './testReducer'
import questionReducer from './questionReducer'
import {reducer} from 'redux-form'

export default combineReducers({
    auth:authReducer,
    form:reducer,
    test:testReducer,
    question:questionReducer
})