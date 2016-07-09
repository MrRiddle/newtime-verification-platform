import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'

import App from './App'
import Login from './views/Login'
import Home from './views/Home'

import './main.less';

let store = createStore(todoApp)

render(
    (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home} />
                    <Route path="login" component={Login} />
                </Route>
            </Router>
        </Provider>
    ),
    document.getElementById('root')
)
