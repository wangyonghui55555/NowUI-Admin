import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, Button, Modal, message} from 'antd';

import NFinalTable from './NFinalTable';
import NFinalModal from "./NFinalModal";

import TableType from "../emun/TableType";

import constant from "../common/constant";
import http from "../common/http";

class NFinalCardTable extends Component {
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
        // this.props.self.handleAddContent({
        //     ref: this.refs.table,
        //     cardType: this.props.cardType,
        //     tableType: this.props.tableType,
        //     tableFormItemKey: this.props.tableFormItemKey
        // });
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
        setTimeout(() => {
            this.refs.modal.handleSetFieldsValue(formValue);
        }, 1);

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
                column.render = (text, record, index) => tableColumn.tableColumnRender(text, record, index);
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
                style={{display: this.props.cardIsVisible ? 'block' : 'none'}}
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
														size={'small'}
                                                        type={button.isPrimary ? "primary" : ""}
                                                        loading={button.buttonIsLoad}
                                                        onClick={() => button.buttonOnClick()}>
                                                    {button.buttonTitle}
                                                </Button>
                                            )
                                        })
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
												size={'small'}
                                                type={button.buttonIsPrimary ? "primary" : ""}
                                                className="page-button-right"
                                                loading={button.buttonIsLoad}
                                                onClick={() => button.buttonOnClick()}>
                                            {button.buttonTitle}
                                        </Button>
                                    );
                                })
                                :
                                ''
                        }
                    </div>
                }>
                <NFinalTable ref={'table'}
                             tableSourceType={this.props.tableSourceType}
                             tableSourceStore={this.props.tableSourceStore}
                             tableSourceStoreKey={this.props.tableSourceStoreKey}
                             tableSourceStorePageIndexKey={this.props.tableSourceStorePageIndexKey}
                             tableSourceStorePageSizeKey={this.props.tableSourceStorePageSizeKey}
                             tableSourceStoreTotalKey={this.props.tableSourceStoreTotalKey}
                             tableSourceStoreListKey={this.props.tableSourceStoreListKey}
                             tableSourceStoreDispatch={this.props.tableSourceStoreDispatch}
                             tableSourceStoreLoad={this.props.tableSourceStoreLoad}
                             tableRowKey={this.props.tableRowKey}
                             tableColumnList={columnList}
                             tableIsPagination={this.props.tableIsPagination}
                             tableIsLoad={this.props.tableIsLoad}/>
                <NFinalModal ref={'modal'}
                             title={this.props.cardTitle}
                             formItemList={this.props.tableFormItemList ? this.props.tableFormItemList : []}
                             isStatic={this.props.tableType === TableType.SUBMIT}/>
            </Card>
        );
    }
}

NFinalCardTable.propTypes = {
    cardIsVisible: PropTypes.bool.isRequired,
    cardIsRequired: PropTypes.bool.isRequired,
    cardType: PropTypes.string.isRequired,
    cardTitle: PropTypes.string.isRequired,
    cardPrimaryButtonList: PropTypes.array.isRequired,
    cardSecondaryButtonList: PropTypes.array.isRequired,
    tableType: PropTypes.string.isRequired,
    tableSubmitRequired: PropTypes.bool,
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
    tableIsLoad: PropTypes.bool.isRequired,
    tableFormItemKey: PropTypes.string,
    tableFormTitle: PropTypes.string.isRequired,
    tableFormItemList: PropTypes.array.isRequired,
};

NFinalCardTable.defaultProps = {
    tableSubmitRequired: false
};

export default NFinalCardTable