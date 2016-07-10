import React from 'react'

import NavBar from '../components/home/NavBar'
import MasterPanel from '../components/home/MasterPanel'

import '../less/home.less';

const Home = React.createClass({
  render() {
    const CATEGORY = [
        {
            key: 'todoList',
            path: 'tocheck',
            name: '待认证名单',
            icon: 'time'
        },
        {
            key: 'doneList',
            path: 'checked',
            name: '已通过名单',
            icon: 'ok'
        }
    ];
    return (
            <div className="home-view">
                <NavBar name="食光后台认证系统" />
                <div className="main-panel">
                    <MasterPanel category={CATEGORY} />
                    <div className="detail-panel">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
  }
})

export default Home
