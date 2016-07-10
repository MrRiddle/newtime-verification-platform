import React from 'react'

import { Link } from 'react-router'

const MasterPanel = React.createClass({

    getInitialState: function() {
        return {
            actived: 'todoList'
        }
    },

    _handleClick(key) {
        this.setState({
            actived: key
        });
    },

    render() {
        var self = this;
        return (
            <div className="master-panel">
                <div className="list-group">
                {
                    this.props.category.map((item) => {
                        let isActived = (self.state.actived === item.key);
                        return (
                            <Link to={item.path} className={'list-group-item' + (isActived?' active':'')} key={item.key} onClick={() => {self._handleClick(item.key)}}>
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
