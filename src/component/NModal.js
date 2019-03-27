import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Button, Modal, Form, message} from 'antd';

import NCol from '../component/NCol';
import NInputText from '../component/NInputText';
import NInputTextArea from '../component/NInputTextArea';
import NInputNumber from '../component/NInputNumber';
import NSelect from '../component/NSelect';

import constant from '../common/constant';
import http from "../common/http";

class MModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            loading: false,
            isLoad: false,
        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = () => {

        this.props.form.validateFieldsAndScroll((errors, values) => {
            if (!!errors) {
                return;
            }
            let modalList = this.props.modalList;
            for (let i = 0; i < modalList.length; i++) {
                if (modalList[i].type === 'SELECT') {
                    if (typeof (modalList[i].labelInValue) === 'undefined' || modalList[i].labelInValue === true) {
                        for (let value in values) {
                            if (value === modalList[i].id) {
                                if (modalList[i].select.mode && modalList[i].select.mode === 'multiple') {
                                    let items = [];
                                    for (let j = 0; j < values[value].length; j++) {
                                        let item = {};
                                        item[modalList[i].select.returnKey] = values[value][j].key;
                                        item[modalList[i].select.returnValue] = values[value][j].label;
                                        item[modalList[i].select.returnSort] = j;
                                        items.push(item);
                                    }
                                    delete values[value];
                                    values[modalList[i].returnRefName] = JSON.stringify(items);
                                } else {
                                    let item = Object.assign({}, values[value]);
                                    item[modalList[i].select.returnKey] = item.key;
                                    item[modalList[i].select.returnValue] = item.label;
                                    delete item.key;
                                    delete item.label;
                                    delete item.title;

                                    values = Object.assign({}, values, item);
                                    if (value !== modalList[i].select.returnKey) {
                                        delete values[value];
                                    }
                                }

                            }
                        }
                    }
                }
            }

            this.setState({
                loading: true
            });

            values.systemVersion = this.state.systemVersion;

            if (this.props.submitKey && this.props.submitKey.length) {
                for (let str of this.props.submitKey) {
                    values[str] = this.state[str];
                }
            }

            http.request({
                url: this.props.baseUrl,
                data: values,
                success: function (data) {
                    message.success(constant.success);
                    this.setState({ loading: false, visible: false });
                    // this.handleBack();

                this.handleLoad();
                    //window.location.reload();
                }.bind(this),
                complete: function () {
                    this.setState({ loading: false, visible: false });
                }.bind(this)
            });
        });

        // setTimeout(() => {
        //     this.setState({ loading: false, visible: false });
        // }, 300);
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    handleClick(item) {
        this.props.secondButtonList[item.key].click();
    }
    handleSubmit() {

    }

    handleLoad() {
        if (this.state.isLoad) {
            return;
        }

        this.setState({
            isLoad: true
        });

        let values = {
            appId: this.props.store.appId,
            pageIndex: this.props.store.pageIndex,
            pageSize: this.props.store.pageSize
        };

        if (this.props.type === 'TREE_TABLE') {
            values[this.props.treeKey] = this.props.store.treeSelectedKeys[0];
        }

        http.request({
            url: this.props.listUrl,
            data: values,
            success: function (data) {
                if (this.props.type === 'TABLE') {
                    this.props.dispatch({
                        type: this.props.id,
                        data: {
                            total: data.total,
                            list: data.list
                        }
                    });
                } else if (this.props.type === 'TREE') {
                    let expandedRowKeys = this.handleExpandedRowKey(data);

                    this.props.dispatch({
                        type: this.props.id,
                        data: {
                            list: data,
                            expandedRowKeys: expandedRowKeys
                        }
                    });
                } else if (this.props.type === 'TREE_TABLE') {
                    let expandedRowKeys = this.handleExpandedRowKey(data);

                    this.props.dispatch({
                        type: this.props.id,
                        data: {
                            total: data.total,
                            list: data.list,
                            expandedRowKeys: expandedRowKeys
                        }
                    });
                }
            }.bind(this),
            error: function () {

            },
            complete: function () {
                this.setState({
                    isLoad: false
                })
            }.bind(this)
        });
    }

    render() {
        const { visible, loading } = this.state;
        const {getFieldDecorator, getFieldValue, setFieldsValue} = this.props.form;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    {
                        this.props.btnName
                    }
                </Button>

                <Modal
                    visible={visible}
                    title={this.props.record.companyName}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>取消</Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                            提交
                        </Button>,
                    ]}
                >

                    <Form>
                        {
                            this.props.modalList.map(function (column) {
                                return (
                                    <Row key={column.id}>
                                        <NCol>
                                            {(function () {
                                                switch (column.type) {
                                                    case 'NUMBER':
                                                        return (
                                                            <NInputNumber id={column.id}
                                                                          label={column.name}
                                                                          min={column.min}
                                                                          max={column.max}
                                                                          step={column.step}
                                                                          formatter={column.formatter}
                                                                          parser={column.parser}
                                                                          required={column.required}
                                                                          getFieldDecorator={getFieldDecorator}
                                                                          getFieldValue={getFieldValue}
                                                                          setFieldsValue={setFieldsValue}
                                                                          onPressEnter={this.handleSubmit.bind(this)}/>
                                                        )
                                                    case 'SELECT':
                                                        return (
                                                            <NSelect id={column.id}
                                                                     label={column.name}
                                                                     mode={column.select.mode}
                                                                     staticOptionList={column.select.staticOptionList}
                                                                     remoteOptionConfig={column.select.remoteOptionConfig}
                                                                     disabled={column.select.disabled}
                                                                     allowClear={column.select.allowClear}
                                                                     showSearch={column.select.showSearch}
                                                                     initialValue={column.select.initialValue}
                                                                     getFieldDecorator={getFieldDecorator}
                                                                     getFieldValue={getFieldValue}
                                                                     setFieldsValue={setFieldsValue}
                                                                     required={column.required}
                                                                     labelInValue={typeof (column.labelInValue) === 'undefined' ? true : column.labelInValue}/>
                                                        )
                                                    case 'LONG_VARCHAR':
                                                        return (
                                                            <NInputTextArea id={column.id}
                                                                            label={column.name}
                                                                            rows={column.rows}
                                                                            required={column.required}
                                                                            getFieldDecorator={getFieldDecorator}
                                                                            getFieldValue={getFieldValue}
                                                                            setFieldsValue={setFieldsValue}
                                                                            onPressEnter={this.handleSubmit.bind(this)}/>
                                                        )
                                                    case 'VARCHAR':
                                                        return (
                                                            <NInputText id={column.id}
                                                                        type={column.inputType}
                                                                        label={column.name}
                                                                        required={column.required}
                                                                        disabled={column.disabled}
                                                                        initialValue={column.initialValue}
                                                                        getFieldDecorator={getFieldDecorator}
                                                                        getFieldValue={getFieldValue}
                                                                        setFieldsValue={setFieldsValue}
                                                                        onPressEnter={this.handleSubmit.bind(this)}/>
                                                        );
                                                    default:
                                                        return '';
                                                }
                                            }).bind(this)()}
                                        </NCol>
                                    </Row>
                                )
                            }.bind(this))
                        }
                    </Form>
                </Modal>
            </div>
        );
    }
}

MModal.propTypes = {
    record: PropTypes.object.isRequired,
    modalList: PropTypes.array.isRequired,
    btnName:PropTypes.string.isRequired,
    baseUrl:PropTypes.string.isRequired,
    store: PropTypes.object.isRequired,
    searchList: PropTypes.array.isRequired,

};

MModal.defaultProps = {
};

MModal = Form.create()(MModal);
export default MModal