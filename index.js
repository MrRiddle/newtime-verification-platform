import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import Login from './components/Login'

import './main.less';

let store = createStore(todoApp)

render(
    (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <Route path="login" component={Login} />
                </Route>
            </Router>
        </Provider>
    ),
    document.getElementById('root')
)
