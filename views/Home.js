import React from 'react'

import Nav from '../components/home/Nav'

import '../less/home.less';

const Home = React.createClass({
  render() {
    return (
            <div className="home-view">
                <Nav name="食光后台认证系统" />
                
            </div>
        )
  }
})

export default Home
