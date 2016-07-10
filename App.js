import React from 'react'

const App = React.createClass({
  render(){
    return (
      <div className="app">
        {this.props.children}
      </div>
    )
  }
})

export default App
