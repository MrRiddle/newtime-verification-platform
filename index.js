import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Cookies from 'js-cookie'
import shiguangApp from './reducers'

import App from './App'
import Login from './views/Login'
import Home from './views/Home'
import ToCheck from './views/ToCheck'
import Checked from './views/Checked'
import ToCheckDetail from './views/ToCheckDetail'
import CheckedDetail from './views/CheckedDetail'

import './main.less'

let store = createStore(shiguangApp)

var requireAuth = (nextState, replace) => {
    const hasLogin = Cookies.get('username');
    if (!hasLogin) {
        replace('/login');
    }
}

var hasAuth = (nextState, replace) => {
    const hasLogin = Cookies.get('username');
    if (hasLogin) {
        replace('/home');
    }
}

render(
    (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRedirect to="/home" component={Home} />
                    <Route onEnter={hasAuth} path="/login" component={Login} />
                    <Route onEnter={requireAuth} path="/home" component={Home}>
                        <IndexRedirect to="tocheck" component={ToCheck} />
                        <Route onEnter={requireAuth} path="tocheck" component={ToCheck} />
                        <Route onEnter={requireAuth} path="checked" component={Checked} />
                        <Route onEnter={requireAuth} path="tocheck/:id" component={ToCheckDetail} />
                        <Route onEnter={requireAuth} path="checked/:id" component={CheckedDetail} />
                    </Route>
                </Route>
            </Router>
        </Provider>
    ),
    document.getElementById('root')
)
