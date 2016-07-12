import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

import '../less/to_check.less';

import { fetchToCheckList } from '../actions'

const ToCheck = React.createClass({

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchToCheckList())
    },

    handleCheck: function(e,id) {
        e.preventDefault();
        const path = `/home/tocheck/${id}`;
        browserHistory.push(path)
    },

    render() {
        const { list, isWaiting } = this.props;
        return (
            <div className="to-check-view">
                <div className="page-header">
                    <h1>等待审核用户列表</h1>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>身份证号</th>
                            <th>家庭住址</th>
                            <th>审核</th>
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
                                    <td>{item.identity}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary btn-xs" onClick={(e) => {this.handleCheck(e,item.id)}}>审核</button>
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

ToCheck.propTypes = {
    list: PropTypes.array.isRequired,
    isWaiting: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { isWaiting, list } = state.toCheckList
    return {
        isWaiting,
        list
    }
}

export default connect(mapStateToProps)(ToCheck)
