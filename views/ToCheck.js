import React from 'react'
import { browserHistory } from 'react-router'

import '../less/to_check.less';

const ToCheck = React.createClass({

    getInitialState: function() {
        return {
            list: [
                {
                    id: '001',
                    name: '尼古拉斯·赵四',
                    gender: '男',
                    address: '广东省深圳市深南大道10000号'
                },
                {
                    id: '002',
                    name: '尼古拉斯·赵四',
                    gender: '男',
                    address: '广东省深圳市深南大道10000号'
                },
                {
                    id: '003',
                    name: '尼古拉斯·赵四',
                    gender: '男',
                    address: '广东省深圳市深南大道10000号'
                },
                {
                    id: '004',
                    name: '尼古拉斯·赵四',
                    gender: '男',
                    address: '广东省深圳市深南大道10000号'
                }
            ]
        }
    },

    handleCheck: function(e,id) {
        e.preventDefault();
        const path = `/home/tocheck/${id}`;
        browserHistory.push(path)
    },

    render() {
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
                            <th>家庭住址</th>
                            <th>审核</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.list.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.gender}</td>
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

export default ToCheck
