import React from 'react'

import { Link } from 'react-router'

const MasterPanel = React.createClass({

    render() {
        var self = this;
        return (
            <div className="master-panel">
                <div className="list-group">
                {
                    this.props.category.map((item) => {
                        return (
                            <Link to={`/home/${item.path}`} className="list-group-item" activeClassName="list-group-item active" key={item.key} >
                                <span className={'glyphicon glyphicon-'+item.icon}></span>
                                <span className="text">{item.name}</span>
                            </Link>
                        );
                    })
                }
                </div>
            </div>
        )
    }
})

export default MasterPanel
