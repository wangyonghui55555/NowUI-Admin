import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, message} from 'antd';

import NSuperForm from './NSuperForm';

import http from "../common/http";
import constant from "../common/constant";

class NSuperModal extends Component {
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

            if (data[formItem.formItemKey]) {
                formValue[formItem.formItemKey] = data[formItem.formItemKey];
            }
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
                submitValue = Object.assign({}, submitValue, this.state.submitRequest());

                http.request({
                    url: this.state.submitConfig.url,
                    data: submitValue,
                    success: function (data) {
                        message.success(constant.success);

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
                <NSuperForm formIsMultiCol={false}
                            formItemList={this.props.formItemList}
                            cardFormItemOnPressEnter={this.handleSubmit.bind(this)}
                            wrappedComponentRef={function (instance) {
                                this.formRef = instance;
                            }.bind(this)}/>
            </Modal>
        );
    }
}

NSuperModal.propTypes = {
    title: PropTypes.string.isRequired,
    formItemList: PropTypes.array.isRequired,
    isStatic: PropTypes.bool.isRequired,
};

NSuperModal.defaultProps = {};

export default NSuperModal