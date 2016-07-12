import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

import '../less/checked.less';

import { fetchCheckedList } from '../actions'

const Checked = React.createClass({

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchCheckedList())
    },

    handleCheck: function(e,id) {
        e.preventDefault();
        const path = `/home/checked/${id}`;
        browserHistory.push(path)
    },

    render() {
        const { list, isWaiting } = this.props;
        return (
            <div className="checked-view">
                <div className="page-header">
                    <h1>审核通过用户列表</h1>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>家庭住址</th>
                            <th>修改</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        list.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary btn-xs" onClick={(e) => {this.handleCheck(e,item.id)}}>修改</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
})

Checked.propTypes = {
    list: PropTypes.array.isRequired,
    isWaiting: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { isWaiting, list } = state.checkedList
    return {
        isWaiting,
        list
    }
}

export default connect(mapStateToProps)(Checked)
