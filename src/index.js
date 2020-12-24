import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reducer from './store/reducer/index' //接收action的地方
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(reduxThunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)