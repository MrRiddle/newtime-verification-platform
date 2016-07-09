import React from 'react'

import icon_96 from '../../img/icon-96.png'

const LoginPanel = React.createClass({
  render() {
    return (
        <div className="row login-panel">
            <div className="panel panel-default col-xs-6 col-xs-offset-3 col-md-4 col-md-offset-4">
                <div className="panel-body row">
                    <span className="col-xs-4">
                        <img src={icon_96} height="96px" width="96px" />
                    </span>
                    <form className="col-xs-8">
                        <input type="text" className="form-control" id="username" placeholder="用户名" />
                        <input type="password" className="form-control" id="password" placeholder="密码" />
                        <button type="submit" className="btn btn-primary btn-block">登录</button>
                    </form>
                </div>
            </div>
        </div>
    )
  }
})

export default LoginPanel
