import React from 'react'
import { browserHistory } from 'react-router'
import Cookies from 'js-cookie'

import icon_96 from '../../img/icon-96.png'

const LoginPanel = React.createClass({

    getInitialState: function() {
        return {msg: ''};
    },

    handleSubmit(e) {
        e.preventDefault();
        const username = e.target.elements[0].value;
        const password = e.target.elements[1].value;
        const self = this;
        $.post("/login", {
            username: username,
            password: password
        }).done((data,status) => {
            const isAuth = data.auth;
            if(isAuth){
                Cookies.set('username', username);
                browserHistory.push('/home')
            }else{
                self.setState({msg: data.msg});
                browserHistory.push('/login')
            }
        });
    },

    render() {
        let failMsg;
        if('' !== this.state.msg){
            failMsg = (<div className="alert alert-danger" role="alert">
                <strong>登录失败！</strong>
                {this.state.msg}
            </div>)
        }

        return (
            <div className="row login-panel">
                <div className="panel panel-default col-xs-6 col-xs-offset-3 col-md-4 col-md-offset-4">
                    <div className="panel-body row">
                        <span className="col-xs-4">
                            <img src={icon_96} height="96px" width="96px" />
                        </span>
                        <form className="col-xs-8" onSubmit={this.handleSubmit}>
                            <input type="text" required="required" pattern="^[a-zA-Z][a-zA-Z0-9_]{4,15}$" className="form-control" id="username" placeholder="用户名" />
                            <input type="password" required="required" pattern="^[a-zA-Z]\w{5,17}$" className="form-control" id="password" placeholder="密码" />
                            <button type="submit" className="btn btn-primary btn-block">登录</button>
                        </form>
                    </div>
                    {failMsg}
                </div>
            </div>
        )
    }
})

export default LoginPanel
