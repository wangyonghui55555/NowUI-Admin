import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'antd';

import http from "../common/http";
import TableSourceType from "../emun/TableSourceType";

class NFinalTable extends Component {
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

    handleOnChangeIndex (pageIndex) {
        let data = {};

        data[this.props.tableSourceStorePageIndexKey] = pageIndex;

        // console.log(data);

        new Promise(function (resolve) {
            this.props.tableSourceStoreDispatch({
                type: this.props.tableSourceStoreKey,
                data: data
            });

            resolve();
        }.bind(this)).then(function () {
            this.props.tableSourceStoreLoad();
        }.bind(this));
    }

    handleOnChangeSize (pageIndex, pageSize) {
        let data = {};

        data[this.props.tableSourceStorePageIndexKey] = pageIndex;
        data[this.props.tableSourceStorePageSizeKey] = pageSize;

        new Promise(function (resolve) {
            this.props.tableSourceStoreDispatch({
                type: this.props.tableSourceStoreKey,
                data: data
            });

            resolve();
        }.bind(this)).then(function () {
            this.props.tableSourceStoreLoad();
        }.bind(this));
    }

    render() {
        let isLoad = false;
        switch (this.props.tableSourceType) {
            case TableSourceType.STORE:
                isLoad = this.props.tableIsLoad;
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

        const total = this.props.tableSourceType === TableSourceType.STORE ? this.props.tableSourceStore[this.props.tableSourceStoreTotalKey] : this.state.total;
        const pageIndex = this.props.tableSourceType === TableSourceType.STORE ? this.props.tableSourceStore[this.props.tableSourceStorePageIndexKey] : this.state.pageIndex;
        const pageSize = this.props.tableSourceType === TableSourceType.STORE ? this.props.tableSourceStore[this.props.tableSourceStorePageSizeKey] : this.state.pageSize;

        const pagination = {
            size: 'defalut',
            total: total,
            showTotal: function (total) {
                return '总共' + total + '条数据';
            },
            current: pageIndex,
            pageSize: pageSize,
            showSizeChanger: false,
            onShowSizeChange: this.handleOnChangeIndex.bind(this),
            onChange: this.handleOnChangeSize.bind(this)
        };
        const dataSource =  this.props.tableSourceType === TableSourceType.STORE ? this.props.tableSourceStore[this.props.tableSourceStoreListKey] : this.state.list;

        return (
            <Table rowKey={this.props.tableRowKey}
                   loading={isLoad}
                   columns={this.props.tableColumnList}
                   dataSource={dataSource}
                   pagination={this.props.tableIsPagination ? pagination : null}
                   scroll={{x: 160}}/>
        );
    }
}

NFinalTable.propTypes = {
    tableSourceType: PropTypes.string.isRequired,
    tableSourceStore: PropTypes.object,
    tableSourceStoreKey: PropTypes.string,
    tableSourceStorePageIndexKey: PropTypes.string,
    tableSourceStorePageSizeKey: PropTypes.string,
    tableSourceStoreTotalKey: PropTypes.string,
    tableSourceStoreListKey: PropTypes.string,
    tableSourceStoreDispatch: PropTypes.func,
    tableSourceStoreLoad: PropTypes.func,
    tableRowKey: PropTypes.string.isRequired,
    tableColumnList: PropTypes.array.isRequired,
    tableIsPagination: PropTypes.bool.isRequired,
    tableIsLoad: PropTypes.bool.isRequired
};

NFinalTable.defaultProps = {

};

export default NFinalTable