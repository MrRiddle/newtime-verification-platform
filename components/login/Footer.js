import React from 'react'

const Footer = React.createClass({
  render() {
    return (
        <div className="row footer">
            <p>版权所有： {this.props.company}</p>
            <p>Copyright &copy; {this.props.company_en}</p>
            <p>All Rights Reserved.</p>
        </div>
    )
  }
})

export default Footer
