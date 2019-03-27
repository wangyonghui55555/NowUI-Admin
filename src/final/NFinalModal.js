import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal} from 'antd';

import NFinalForm from './NFinalForm';

import http from "../common/http";
import util from "../common/util";
import FormItemType from "../emun/FormItemType";

class NFinalModal extends Component {
    constructor (props) {
        super(props);

        this.formRef = null;

        this.state = {
            isVisible: false,
            isLoad: false,
            submitConfig: {},
            submitRequest: () => {
                return {}
            },
            submitResponse: () => {

            }
        }
    }

    componentDidMount () {

    }

    componentWillReceiveProps (nextProps) {

    }

    componentWillUnmount () {

    }

    handleSetFieldsValue (data) {
        let formValue = {};
        for (let j = 0; j < this.props.formItemList.length; j++) {
            let formItem = this.props.formItemList[j];

            // if (data[formItem.formItemKey]) {
            //     formValue[formItem.formItemKey] = data[formItem.formItemKey];
            // }
            formValue = Object.assign({}, formValue, util.handleDevalue(formItem, data));
        }
        this.formRef.props.form.setFieldsValue(formValue);
    }

    handleLoad (loadConfig, loadRequest, loadResponse) {
        this.setState({
            isLoad: true
        });

        http.request({
            url: loadConfig.url,
            data: loadRequest(),
            success: function (data) {
                loadResponse(data);

                let formValue = {};
                for (let j = 0; j < this.props.formItemList.length; j++) {
                    let formItem = this.props.formItemList[j];

                    if (data[formItem.formItemKey]) {
                        formValue[formItem.formItemKey] = data[formItem.formItemKey];
                    }
                }
                this.formRef.props.form.setFieldsValue(formValue);
            }.bind(this),
            complete: function () {
                this.setState({
                    isLoad: false
                });
            }.bind(this)
        });
    }

    handleSubmit () {
        this.formRef.props.form.validateFieldsAndScroll((errors, values) => {
            if (!!errors) {
                return;
            }

            values = util.handleEnValue(this.props.formItemList, values);

            if (this.props.isStatic) {
                this.state.submitResponse(values);

                setTimeout(() => {
                    this.handleCancel();
                }, 1);
            } else {
                this.setState({
                    isLoad: true
                });

                let submitValue = values;
                submitValue = Object.assign({}, submitValue, this.state.submitRequest(submitValue));

                console.log(this.state.submitConfig);

                http.request({
                    url: this.state.submitConfig.url,
                    data: submitValue,
                    success: function (data) {
                        this.state.submitResponse(data);

                        this.handleCancel();
                    }.bind(this),
                    complete: function () {
                        this.setState({
                            isLoad: false
                        });
                    }.bind(this)
                });
            }
        });
    }

    handleCancel () {
        this.setState({
            isVisible: false,
            isLoad: false
        });

        this.formRef.props.form.resetFields();

        for (let formItem of this.props.formItemList) {
            switch (formItem.formItemType) {
                case FormItemType.SELECT:

                    break;
                case FormItemType.TREE_SELECT:

                    break;
                case FormItemType.IMAGE:
                    let value = {};
                    value[formItem.formItemKey] = [];

                    this.formRef.props.form.setFieldsValue(value);

                    break;
                case FormItemType.CHINA:


                    break;
                default:
                    break;
            }
        }
    }

    render () {
        return (
            <Modal
                title={this.props.title}
                visible={this.state.isVisible}
                maskClosable={false}
                confirmLoading={this.state.isLoad}
                width={document.documentElement.clientWidth - 200}
                cancelText='关闭'
                okText='提交'
                onOk={this.handleSubmit.bind(this)}
                onCancel={this.handleCancel.bind(this)}>
                <NFinalForm formIsMultiCol={false}
                            formItemList={this.props.formItemList}
                            cardFormItemOnPressEnter={this.handleSubmit.bind(this)}
                            wrappedComponentRef={function (instance) {
                                this.formRef = instance;
                            }.bind(this)}/>
            </Modal>
        );
    }
}

NFinalModal.propTypes = {
    title: PropTypes.string.isRequired,
    formItemList: PropTypes.array.isRequired,
    isStatic: PropTypes.bool.isRequired,
};

NFinalModal.defaultProps = {};

export default NFinalModal