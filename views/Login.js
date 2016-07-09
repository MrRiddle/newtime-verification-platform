import React from 'react'

import Title from '../components/login/Title'
import LoginPanel from '../components/login/LoginPanel'
import Footer from '../components/login/Footer'

import '../less/login.less';

const Login = React.createClass({
  render() {
    return (
            <div className="login-view container-fluid">
                <Title name="食光后台认证系统" />
                <LoginPanel />
                <Footer company="中华小当家" company_en="ZHONG HUA XIAO DANG JIA" />
            </div>
        )
  }
})

export default Login
