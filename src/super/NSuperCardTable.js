import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, Button, Modal, message} from 'antd';

import NSuperTable from './NSuperTable';
import NSuperModal from "./NSuperModal";

import TableType from "../emun/TableType";

import constant from "../common/constant";
import http from "../common/http";

class NSuperCardTable extends Component {
    constructor (props) {
        super(props);

        // let random = moment().format('YYYY-MM-DD-HH-mm-ss');
        // for (let i = 0; i < 10; i++) {
        //     var number = Math.floor(Math.random() * 10);
        //
        //     random += number;
        // }

        this.state = {
            isLoad: false
        }
    }

    componentDidMount () {
        this.props.self.handleAddContent({
            ref: this.refs.table,
            cardType: this.props.cardType,
            tableType: this.props.tableType,
            tableFormItemKey: this.props.tableFormItemKey
        });
    }

    componentWillReceiveProps (nextProps) {

    }

    componentWillUnmount () {

    }

    handleOpenTableAddModal (submitConfig, submitRequest, submitResponse) {
        this.refs.modal.setState({
            isVisible: true,
            submitConfig,
            submitRequest,
            submitResponse: (data) => {
                message.success(constant.success);

                submitResponse(data);
            }
        });
    }

    handleOpenStaticTableAddModal () {
        this.refs.modal.setState({
            isVisible: true,
            submitResponse: (data) => {
                this.refs.table.handleSaveOrUpdate(-1, data);
            }
        });
    }

    handleOpenTableEditModal (loadConfig, loadRequest, loadResponse, submitConfig, submitRequest, submitResponse) {
        this.refs.modal.setState({
            isVisible: true,
            submitConfig,
            submitRequest,
            submitResponse: (data) => {
                submitResponse(data);
            }
        });

        this.refs.modal.handleLoad(loadConfig, loadRequest, (data) => {
            loadResponse(data);
        });
    }

    handleOpenStaticTableEditModal (formValue, editIndex, submitResponse) {
        this.refs.modal.setState({
            isVisible: true,
            submitResponse: (data) => {
                this.refs.table.handleSaveOrUpdate(editIndex, data);

                submitResponse(data);
            }
        });

        this.refs.modal.handleSetFieldsValue(formValue);
    }

    handleDeleteTable (deleteConfig, deleteRequest, deleteResponse) {
        if (this.state.isLoad) {
            return;
        }

        Modal.confirm({
            title: '温馨提示',
            content: '确定要删除该数据吗?',
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk: function () {
                this.setState({
                    isLoad: true
                });

                http.request({
                    url: deleteConfig.url,
                    data: deleteRequest(),
                    success: function (data) {
                        message.success(constant.success);

                        deleteResponse();
                    },
                    complete: function () {
                        this.setState({
                            isLoad: false
                        });

                    }.bind(this)
                });
            }.bind(this),
            onCancel () {

            },
        });
    }

    handleDeleteStaticTable (index) {
        this.refs.table.handleDelete(index);
    }

    render () {
        let columnList = [];
        for (let i = 0; i < this.props.tableColumnList.length; i++) {
            let tableColumn = this.props.tableColumnList[i];
            let column = {};

            column.key = tableColumn.tableColumnKey;
            column.dataIndex = tableColumn.tableColumnKey;
            column.title = tableColumn.tableColumnTitle;
            column.width = tableColumn.tableColumnWidth;

            if (tableColumn.tableColumnRender) {
                column.render = (text, record, index) => tableColumn.tableColumnRender(text, record, index, this);
            }

            if (i === 0) {
                // column.fixed = 'left';
            }

            // if (tableColumn.tableColumnEditUrl) {
            //     column.render = function (text, record) {
            //         return (
            //             <a onClick={this.handleEdit.bind(this, record, tableColumn.tableColumnEditUrl)}>{text}</a>
            //         )
            //     }.bind(this)
            // }

            columnList.push(column);
        }

        return (
            <Card
                className="margin-top-24"
                title={this.props.cardTitle}
                extra={
                    <div>
                        {
                            this.props.cardSecondaryButtonList ?
                                <Button.Group>
                                    {
                                        this.props.cardSecondaryButtonList.map(function (button, buttonIndex) {
                                            return (
                                                <Button key={buttonIndex}
                                                        icon={button.buttonIcon}
                                                        type={button.isPrimary ? "primary" : ""}
                                                        loading={button.buttonIsLoading}
                                                        onClick={() => button.buttonOnClick(this)}>
                                                    {button.buttonTitle}
                                                </Button>
                                            )
                                        }.bind(this))
                                    }
                                </Button.Group>
                                :
                                ''
                        }
                        {
                            this.props.cardPrimaryButtonList ?
                                this.props.cardPrimaryButtonList.map(function (button, buttonIndex) {
                                    return (
                                        <Button key={buttonIndex}
                                                icon={button.buttonIcon}
                                                type={button.buttonIsPrimary ? "primary" : ""}
                                                className="page-button-right"
                                                loading={button.buttonIsLoading}
                                                onClick={() => button.buttonOnClick(this)}>
                                            {button.buttonTitle}
                                        </Button>
                                    );
                                }.bind(this))
                                :
                                ''
                        }
                    </div>
                }>
                <NSuperTable ref={'table'}
                             tableSourceType={this.props.tableSourceType}
                             tableSourceStorePageIndex={this.props.tableSourceStorePageIndex}
                             tableSourceStorePageSize={this.props.tableSourceStorePageSize}
                             tableSourceStoreTotal={this.props.tableSourceStoreTotal}
                             tableSourceStoreList={this.props.tableSourceStoreList}
                             tableRowKey={this.props.tableRowKey}
                             tableColumnList={columnList}
                             tableIsPagination={this.props.tableIsPagination}
                             isLoad={this.props.self.state.isLoad}/>
                <NSuperModal ref={'modal'}
                             title={this.props.cardTitle}
                             formItemList={this.props.tableFormItemList ? this.props.tableFormItemList : []}
                             isStatic={this.props.tableType === TableType.SUBMIT}/>
            </Card>
        );
    }
}

NSuperCardTable.propTypes = {
    self: PropTypes.object.isRequired,
    cardType: PropTypes.string.isRequired,
    cardTitle: PropTypes.string.isRequired,
    cardPrimaryButtonList: PropTypes.array.isRequired,
    cardSecondaryButtonList: PropTypes.array.isRequired,
    tableType: PropTypes.string.isRequired,
    tableSourceType: PropTypes.string.isRequired,
    tableSourceStorePageIndex: PropTypes.number,
    tableSourceStorePageSize: PropTypes.number,
    tableSourceStoreTotal: PropTypes.number,
    tableSourceStoreList: PropTypes.array,
    tableRowKey: PropTypes.string.isRequired,
    tableColumnList: PropTypes.array.isRequired,
    tableIsPagination: PropTypes.bool.isRequired,
    tableFormItemKey: PropTypes.string,
    tableFormTitle: PropTypes.string.isRequired,
    tableFormItemList: PropTypes.array.isRequired,
};

NSuperCardTable.defaultProps = {};

export default NSuperCardTable