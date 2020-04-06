import React from 'react'
import ReactDom from 'react-dom'
import App from './Components/App'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import Reducers from './Reducers'
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store = createStore(
    Reducers,
    composeEnhancer(applyMiddleware(thunk))
    )

ReactDom.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.querySelector('#root')
)