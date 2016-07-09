import React from 'react'

import icon from '../../img/icon-48.png'

const Title = React.createClass({
  render() {
    return (
        <div className="row title">
            <h1 className="col-xs-8 col-xs-offset-2">
                <img src={icon} height="48px" width="48px" />
                {this.props.name}
            </h1>
        </div>
    )
  }
})

export default Title
