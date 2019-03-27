import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, message} from 'antd';

import CardType from "../emun/CardType";
import FormType from "../emun/FormType";

import http from '../common/http';
import constant from "../common/constant";
import notification from "../common/notification";
import TableType from "../emun/TableType";
import FormItemType from "../emun/FormItemType";

class NSuperLayout extends Component {
    constructor (props) {
        super(props);

        this.contentList = [];

        this.state = {
            isLoad: false,
            loadConfig: {},
            loadRequest: () => {
                return {}
            },
            loadResponse: () => {

            },
            submitConfig: '',
            submitRequest: () => {
                return {}
            },
            submitResponse: () => {

            }
        }
    }

    componentDidMount () {
        //设置search表单的值
        for (let i = 0; i < this.contentList.length; i++) {
            let content = this.contentList[i];

            if (content.cardType === CardType.FORM && content.formType === FormType.SEARCH) {
                let value = {};
                for (let j = 0; j < content.formItemList.length; j++) {
                    let formItem = content.formItemList[j];

                    value[formItem.formItemKey] = this.props.store[formItem.formItemKey];
                }

                content.ref.props.form.setFieldsValue(value);
            }
        }

        this.props.init(this);
    }


    componentWillReceiveProps (nextProps) {

    }

    componentWillUnmount () {
        this.contentList = [];
    }

    handleAddContent (content) {
        this.contentList.push(content);
    }

    handleInitLoad (loadConfig, loadRequest, loadResponse) {
        this.setState({
            loadConfig: loadConfig,
            loadRequest: loadRequest,
            loadResponse: loadResponse
        }, () => {
            this.handleLoad();
        });
    }

    handleInitSubmit (submitConfig, submitRequest, submitResponse) {
        this.setState({
            submitConfig: submitConfig,
            submitRequest: submitRequest,
            submitResponse: submitResponse
        });
    }

    handleSearch () {
        if (this.state.isLoad) {
            return;
        }

        //保存搜索表单的请求参数到本地
        let data = {};
        for (let i = 0; i < this.contentList.length; i++) {
            let content = this.contentList[i];
            
            if (content.cardType === CardType.FORM && content.formType === FormType.SEARCH) {
                data = Object.assign({}, data, content.ref.props.form.getFieldsValue());
            }
        }

        if (JSON.stringify(data) === '{}') {
            this.handleLoad();
        } else {
            new Promise(function (resolve) {
                this.props.dispatch({
                    type: this.props.storeKey,
                    data: data
                });

                resolve();
            }.bind(this)).then(function () {
                this.handleLoad();
            }.bind(this));
        }
    }

    handleLoad () {
        if (this.state.isLoad) {
            return;
        }

        if (!!this.state.loadConfig.isLoad) {
            this.setState({
                isLoad: true
            });
        }

        let loadValue = {};

        //添加自定义参数
        loadValue = Object.assign({}, loadValue, this.state.loadRequest());

        //添加搜索表单参数
        for (let i = 0; i < this.contentList.length; i++) {
            let content = this.contentList[i];

            if (content.cardType === CardType.FORM && content.formType === FormType.SEARCH) {
                for (let j = 0; j < content.formItemList.length; j++) {
                    let formItem = content.formItemList[j];

                    loadValue[formItem.formItemKey] = this.props.store[formItem.formItemKey];
                }
            }
        }

        //添加左边树形右边列表条件参数
        for (let i = 0; i < this.contentList.length; i++) {
            let content = this.contentList[i];

            if (content.cardType === CardType.TREE_TABLE) {

            }
        }

        http.request({
            url: this.state.loadConfig.url,
            data: loadValue,
            success: function (data) {
                //存储自定义数据
                this.state.loadResponse(data);

                //存储form
                for (let i = 0; i < this.contentList.length; i++) {
                    let content = this.contentList[i];

                    if (content.cardType === CardType.FORM && content.formType === FormType.SUBMIT) {
                        //取出每个form表单的数据
                        let formValue = {};
                        for (let j = 0; j < content.formItemList.length; j++) {
                            let formItem = content.formItemList[j];

                            if (data[formItem.formItemKey]) {
                                formValue[formItem.formItemKey] = data[formItem.formItemKey];
                            }
                        }

                        content.ref.props.form.setFieldsValue(formValue);
                    }
                }
            }.bind(this),
            error: function () {

            },
            complete: function () {
                if (!!this.state.loadConfig.isLoad) {
                    this.setState({
                        isLoad: false
                    });
                }
            }.bind(this)
        });
    }

    handleSubmit () {
        if (this.state.isLoad) {
            return;
        }

        let submitValue = {};

        submitValue = Object.assign({}, submitValue, this.state.submitRequest());

        //获取form表单的值
        let errorList = [];
        let valueList = [];
        for (let i = 0; i < this.contentList.length; i++) {
            let content = this.contentList[i];

            if (content.cardType === CardType.FORM && content.formType === FormType.SUBMIT) {
                this.contentList[i].ref.props.form.validateFieldsAndScroll((errors, values) => {
                    if (!!errors) {
                        errorList.push(true);

                        return;
                    }

                    for (let formItem of this.contentList[i].formItemList) {
                        switch (formItem.formItemType) {
                            case FormItemType.SELECT:
                                for (let key in values) {
                                    if (key === formItem.formItemKey) {
                                        let value = values[key];

                                        if (typeof (value) === 'undefined') {
                                            values[formItem.selectKeyName] = '';
                                            values[formItem.selectValueName] = '';
                                        } else {
                                            values[formItem.selectKeyName] = value.key;
                                            values[formItem.selectValueName] = value.label;
                                        }

                                        if (key !== formItem.selectKeyName) {
                                            delete values[key];
                                        }
                                    }
                                }

                                break;
                            case FormItemType.TREE_SELECT:

                                break;
                            case FormItemType.IMAGE:
                                for (let key in values) {
                                    if (key === formItem.formItemKey) {
                                        let value = values[key];

                                        if (typeof (value) === 'undefined') {
                                            values[formItem.imageKeyName] = '';
                                            values[formItem.imageValueName] = '';
                                        } else {
                                            values[formItem.imageKeyName] = value[0].value;
                                            values[formItem.imageValueName] = value[0].label;
                                        }

                                        if (key !== formItem.imageKeyName) {
                                            delete values[key];
                                        }
                                    }
                                }

                                break;
                            case TableType.CHINA:

                                break;
                            default:
                                break;
                        }
                    }

                    valueList.push(values);
                });
            } else if (content.cardType === CardType.TABLE && content.tableType === TableType.SUBMIT) {
                let value = {};
                value[this.contentList[i].tableFormItemKey] = JSON.stringify(this.contentList[i].ref.state.list);

                valueList.push(value);
            }
        }

        console.log(valueList);

        if (errorList.length > 0) {
            return;
        }

        return;

        for (let i = 0; i < valueList.length; i++) {
            submitValue = Object.assign({}, submitValue, valueList[i]);
        }

        this.setState({
            isLoad: true
        });

        http.request({
            url: this.state.submitConfig.url,
            data: submitValue,
            success: function (data) {
                message.success(constant.success);

                this.state.submitResponse(data);
            }.bind(this),
            complete: function () {
                this.setState({
                    isLoad: false
                });
            }.bind(this)
        });
    }

    handleValidateFieldsAndScroll (i, submitValue) {
        this.contentList[i].ref.props.form.validateFieldsAndScroll((errors, values) => {
            if (!!errors) {
                return null;
            }

            return Object.assign({}, submitValue, values);
        });

        return null;
    }

    handleHttp (config, requet, response) {
        if (this.state.isLoad) {
            return;
        }

        if (!!config.isConfirm) {
            Modal.confirm({
                title: '温馨提示',
                content: config.confirmContent,
                okText: '确定',
                okType: 'danger',
                cancelText: '取消',
                onOk: function () {
                    this.handleHttpAjax(config, requet, response);
                }.bind(this),
                onCancel () {

                },
            });
        } else {
            this.handleHttpAjax(config, requet, response);
        }
    }

    handleHttpAjax (config, requet, response) {
        if (!!config.isLoad) {
            this.setState({
                isLoad: true
            });
        }

        let value = requet();

        http.request({
            url: config.url,
            data: value,
            success: function (data) {
                response(data);
            },
            complete: function () {
                if (!!config.isLoad) {
                    this.setState({
                        isLoad: false
                    });
                }
            }.bind(this)
        });
    }

    handleAdd () {
        this.props.history.push({
            pathname: this.props.addUrl,
            query: {}
        });
    }

    handleReset () {
        for (let i = 0; i < this.contentList.length; i++) {
            let content = this.contentList[i];

            if (content.cardType === CardType.FORM && content.formType === FormType.SUBMIT) {
                content.ref.props.form.resetFields();
            }
        }
    }

    handlePush (url) {
        this.props.history.push({
            pathname: url,
            query: {}
        });
    }

    handleBack () {
        this.props.history.goBack();
    }

    handleNotification (name, data) {
        notification.emit(name, data);
    }

    render () {
        return (
            <div>
                {
                    this.props.headerRender(this)
                }
                <div className="card"
                     style={{height: document.documentElement.clientHeight - 106 - 1}}>
                    {
                        this.props.contentRender(this)
                    }
                </div>
            </div>
        );
    }
}

NSuperLayout.propTypes = {
    activeMenu: PropTypes.string.isRequired,
    store: PropTypes.object.isRequired,
    storeKey: PropTypes.string.isRequired,
    init: PropTypes.func.isRequired,
    headerRender: PropTypes.func.isRequired,
    contentRender: PropTypes.func.isRequired
};

NSuperLayout.defaultProps = {};

export default NSuperLayout;