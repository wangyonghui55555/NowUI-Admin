import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'antd';

import http from "../common/http";
import TableSourceType from "../emun/TableSourceType";

class NSuperTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            pageIndex: 1,
            pageSize: 10,
            total: 0,
            list: []
        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }

    handleLoad () {
        if (this.state.isLoad) {
            return;
        }

        this.setState({
            isLoad: true
        });

        let loadValue = {};



        http.request({
            url: this.props.remoteUrl,
            data: loadValue,
            success: function (data) {


            },
            error: function () {

            },
            complete: function () {
                this.setState({
                    isLoad: false
                });
            }.bind(this)
        });
    }

    handleSaveOrUpdate (index, item) {
        let list = this.state.list;

        // item.key = list.length;
        if (index > -1) {
            list.splice(index, 1, item);
        } else {
            list.splice(0, 0, item);
        }

        this.setState({
            total: list.length,
            list: list
        });
    }

    handleDelete (index) {
        let list = this.state.list;

        list.splice(index, 1);

        this.setState({
            total: list.length,
            list: list
        });
    }

    handleChangeIndex (pageIndex) {
        // new Promise(function (resolve) {
        //     let value = {};
        //     value[this.props.pageIndexStoreKey] = pageIndex;
        //
        //     this.props.self.props.dispatch({
        //         type: this.props.tableStoreKey,
        //         data: value
        //     });
        //
        //     resolve();
        // }.bind(this)).then(function () {
        //     this.handleLoad();
        // }.bind(this));
    }

    handleChangeSize (pageIndex, pageSize) {
        // new Promise(function (resolve) {
        //     let value = {};
        //     value[this.props.pageIndexStoreKey] = pageIndex;
        //     value[this.props.pageSizeStoreKey] = pageSize;
        //
        //     this.props.self.props.dispatch({
        //         type: this.props.tableStoreKey,
        //         data: value
        //     });
        //
        //     resolve();
        // }.bind(this)).then(function () {
        //     this.props.handleLoad();
        // }.bind(this));
    }

    render() {
        let isLoad = false;
        switch (this.props.tableSourceType) {
            case TableSourceType.STORE:
                isLoad = this.props.isLoad;
                break;
            case TableSourceType.REMOTE:
                isLoad = this.state.isLoad;
                break;
            case TableSourceType.STATIC:
                isLoad = false;
                break;
            default:
                break;
        }

        const total = this.props.tableSourceType === TableSourceType ? this.props.tableSourceStoreTotal : this.state.total;
        const pageIndex = this.props.tableSourceType === TableSourceType ? this.props.tableSourceStorePageIndex : this.state.pageIndex;
        const pageSize = this.props.tableSourceType === TableSourceType ? this.props.tableSourceStorePageSize : this.state.pageSize;

        const pagination = {
            size: 'defalut',
            total: total,
            showTotal: function (total) {
                return '总共' + total + '条数据';
            },
            current: pageIndex,
            pageSize: pageSize,
            showSizeChanger: false,
            onShowSizeChange: this.handleChangeSize.bind(this),
            onChange: this.handleChangeIndex.bind(this)
        };
        const dataSource =  this.props.tableSourceType === TableSourceType.STORE ? this.props.tableSourceStoreList : this.state.list;

        return (
            <Table rowKey={(record,index)=> index}
                   loading={isLoad}
                   columns={this.props.tableColumnList}
                   dataSource={dataSource}
                   pagination={this.props.tableIsPagination ? pagination : null}
                   scroll={{x: 160}}/>
        );
    }
}

NSuperTable.propTypes = {
    tableSourceType: PropTypes.string.isRequired,
    tableSourceStorePageIndex: PropTypes.number,
    tableSourceStorePageSize: PropTypes.number,
    tableSourceStoreTotal: PropTypes.number,
    tableSourceStoreList: PropTypes.array,
    tableRowKey: PropTypes.string.isRequired,
    tableColumnList: PropTypes.array.isRequired,
    tableIsPagination: PropTypes.bool.isRequired
};

NSuperTable.defaultProps = {

};

export default NSuperTable