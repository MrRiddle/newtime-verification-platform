import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'

import App from './App'
import Login from './views/Login'
import Home from './views/Home'
import ToCheck from './views/ToCheck'
import Checked from './views/Checked'

import './main.less';

let store = createStore(todoApp)

render(
    (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRedirect to="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={Home}>
                        <IndexRedirect to="tocheck" component={ToCheck} />
                        <Route path="tocheck" component={ToCheck} />
                        <Route path="checked" component={Checked} />
                    </Route>
                </Route>
            </Router>
        </Provider>
    ),
    document.getElementById('root')
)
