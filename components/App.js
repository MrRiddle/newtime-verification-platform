import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Link } from 'react-router'

const App = React.createClass({
  render(){
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/login">Login</Link></li>
        </ul>
        {this.props.children}
      </div>
      )
  }
})

export default App
