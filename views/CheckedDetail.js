import React from 'react'
import { browserHistory } from 'react-router'

import '../less/checked_detail.less';

const CheckedDetail = React.createClass({

    getInitialState: function() {
        return {
            info: {
                    id: '001',
                    name: '尼古拉斯·赵四',
                    gender: '男',
                    address: '广东省深圳市深南大道10000号'
                }
        }
    },

    handlePass: function(e) {
        e.preventDefault();
        const path = `/home/checked`;
        browserHistory.push(path)
    },

    handleFail: function(e) {
        e.preventDefault();
        const path = `/home/checked`;
        browserHistory.push(path)
    },

    render() {
        const info = this.state.info;
        return (
            <div className="checked-detail-view container-fluid">
                <div className="page-header">
                    <h1>
                        {info.name}
                        <small>已通过审核</small>
                    </h1>
                </div>

                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <th>性别</th>
                            <td>{info.gender}</td>
                        </tr>
                        <tr>
                            <th>地址</th>
                            <td>{info.address}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="button-group row">
                    <button type="button" className="btn btn-danger col-xs-2 col-xs-offset-3" onClick={this.handleFail}>
                        <span className="glyphicon glyphicon-remove"></span>
                        取消资格
                    </button>
                    <button type="button" className="btn btn-success col-xs-2 col-xs-offset-1" onClick={this.handlePass}>
                        <span className="glyphicon glyphicon-ok"></span>
                        返回
                    </button>
                </div>

            </div>
        )
    }
})

export default CheckedDetail
