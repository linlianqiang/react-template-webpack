/*
 * @Description: 
 * @Date: 2022-03-14 11:38:22
 * @LastEditTime: 2022-04-02 11:20:50
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'antd/dist/antd.css';
import '@styles/reset.css'
// import reducer from './store/reducer/index' //接收action的地方
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
// import reduxThunk from 'redux-thunk'

// const store = createStore(reducer, applyMiddleware(reduxThunk))
// store={store}
ReactDOM.render(

    
    // <Provider>
        <App />,
    // </Provider>,
    document.getElementById('app')
)