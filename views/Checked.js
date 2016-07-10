import React from 'react'

import '../less/checked.less';

const Checked = React.createClass({

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

    render() {
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
                        this.state.list.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary btn-xs">修改</button>
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

export default Checked
