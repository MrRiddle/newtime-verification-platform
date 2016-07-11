import React from 'react'
import { bootstrap } from 'bootstrap'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import Cookies from 'js-cookie'

import icon from '../../img/icon-48.png'

const NavBar = React.createClass({

    handleLogout(e) {
        e.preventDefault();
        Cookies.remove('username');
        Cookies.remove('_token');
        browserHistory.push('/login')
    },

  render() {
    return (
        <div className="nav-bar">
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <img className="navbar-brand" alt="Brand" src={icon} />
                        <h4 className="navbar-text">{this.props.name}</h4>
                    </div>

                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <span className="glyphicon glyphicon-user"></span>
                                    欢迎您！{Cookies.get('username')}
                                    <span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a onClick={this.handleLogout} >
                                            <span className="glyphicon glyphicon-off"></span>
                                            <span className="text">登出</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
  }
})

export default NavBar
