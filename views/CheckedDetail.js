import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

import '../less/checked_detail.less';

import { fetchDetailInfo, fetchSetPass, fetchSetFail } from '../actions'

const CheckedDetail = React.createClass({

    componentDidMount() {
        const id = this.props.params.id;
        const { dispatch } = this.props
        dispatch(fetchDetailInfo(id))
    },

    handlePass: function(e) {
        e.preventDefault();
        const { dispatch } = this.props
        const id = this.props.params.id;
        dispatch(fetchSetPass(id));
        const path = `/home/checked`;
        browserHistory.push(path);
    },

    handleFail: function(e) {
        e.preventDefault();
        const { dispatch } = this.props
        const id = this.props.params.id;
        dispatch(fetchSetFail(id));
        const path = `/home/checked`;
        browserHistory.push(path);
    },

    render() {
        const { info, isWaiting } = this.props;
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
                            <th>ID</th>
                            <td>{info.id}</td>
                        </tr>
                        <tr>
                            <th>性别</th>
                            <td>{info.gender}</td>
                        </tr>
                        <tr>
                            <th>身份证号</th>
                            <td>{info.identity}</td>
                        </tr>
                        <tr>
                            <th>地址</th>
                            <td>{info.address}</td>
                        </tr>
                        <tr>
                            <th>头像</th>
                            <td>
                                <img src={info.headimgurl} width="640px" />
                            </td>
                        </tr>
                        <tr>
                            <th>厨房照片</th>
                            <td>
                                <img src={info.homeimgurl} width="640px" />
                            </td>
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

CheckedDetail.propTypes = {
    info: PropTypes.object.isRequired,
    isWaiting: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { isWaiting, info } = state.detailInfo
    return {
        isWaiting,
        info
    }
}

export default connect(mapStateToProps)(CheckedDetail)
