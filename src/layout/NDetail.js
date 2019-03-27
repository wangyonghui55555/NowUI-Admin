import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Form, Col, Button, Modal, message} from 'antd';
import moment from 'moment';

import NHeader from '../component/NHeader';
import NCol from '../component/NCol';
import NInputText from '../component/NInputText';
import NInputTextArea from '../component/NInputTextArea';
import NInputNumber from '../component/NInputNumber';
import NSwitch from '../component/NSwitch';
import NSelect from '../component/NSelect';
import NTreeSelect from '../component/NTreeSelect';
import NInputHtml from '../component/NInputHtml';
import NInputMedia from '../component/NInputMedia';
import NInputDate from '../component/NInputDate';
import NInputChina from '../component/NInputChina';
import NTable from '../component/NTable';

import china from '../common/china';

import constant from '../common/constant';
import http from "../common/http";

class NDetail extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isLoad: false,
            isEdit: false,
            systemVersion: ''
        };
        if (this.props.submitKey && this.props.submitKey.length) {
            for (let str of this.props.submitKey) {
                this.state[str] = ''
            }
        }
    }

    componentDidMount () {
        let isEdit = this.props.match.path.indexOf('/edit') > -1;

        this.props.dispatch({
            type: this.props.id,
            data: {
                isEdit: isEdit,
                articleCategoryId: this.props.match.params[this.props.primaryKey]
            }
        });

        if (isEdit) {
            this.setState({
                isEdit: true
            });

            this.handleLoad();
        }
        if (this.props.match.params) {
            this.setState(this.props.match.params);
        }
    }

    componentWillReceiveProps (nextProps) {

    }

    componentWillUnmount () {

    }

    handleLoad () {
        if (this.state.isLoad) {
            return;
        }

        this.setState({
            isLoad: true
        });

        let values = {};
        values[this.props.primaryKey] = this.props.match.params[this.props.primaryKey];
        http.request({
            url: this.props.baseUrl + '/find',
            data: values,
            success: function (data) {
                let values = {};
                let columnList = this.props.columnList;

                for (let i = 0; i < columnList.length; i++) {
                    if (columnList[i].type === 'SELECT') {
                        if (typeof (columnList[i].labelInValue) === 'undefined' || columnList[i].labelInValue === true) {
                            if (columnList[i].select.mode && columnList[i].select.mode === 'multiple') {
                                let options = [];
                                for (let j = 0; j < data[columnList[i].id].length; j++) {
                                    let item = {};
                                    item.key = data[columnList[i].id][j][columnList[i].select.returnKey];
                                    item.label = data[columnList[i].id][j][columnList[i].select.returnValue];
                                    options.push(item);
                                }
                                values[columnList[i].id] = options;
                            } else {
                                values[columnList[i].id] = {
                                    key: data[columnList[i].select.returnKey],
                                    label: data[columnList[i].select.returnValue]
                                };
                            }
                        } else {
                            values[columnList[i].id] = data[columnList[i].id];
                        }
                    } else if (columnList[i].type === 'TREE_SELECT') {
                        if (typeof (columnList[i].labelInValue) === 'undefined' || columnList[i].labelInValue === true) {
                            if (data[columnList[i].select.returnKey] !== '') {
                                values[columnList[i].id] = {
                                    value: data[columnList[i].select.returnKey],
                                    label: data[columnList[i].select.returnValue]
                                };
                            }
                        } else {
                            values[columnList[i].id] = data[columnList[i].id];
                        }
                    } else if (columnList[i].type === 'MEDIA') {
                        if (data[columnList[i].returnKey] !== '') {
                            if (columnList[i].returnLimit === 1) {
                                values[columnList[i].id] = [{
                                    value: data[columnList[i].returnKey],
                                    label: data[columnList[i].returnValue]
                                }];
                            } else if (columnList[i].returnLimit > 1) {
                                let items = [];
                                for (let j = 0; j < data[columnList[i].id].length; j++) {
                                    let item = {
                                        value: data[columnList[i].id][j][columnList[i].returnKey],
                                        label: data[columnList[i].id][j][columnList[i].returnValue]
                                    };
                                    items.push(item);
                                }
                                values[columnList[i].id] = items;
                            } else {

                            }

                        }
                    } else if (columnList[i].type === 'DATE_PICKER') {
                        if (data[columnList[i].id]) {
                            values[columnList[i].id] = moment(data[columnList[i].id]);
                        }
                    } else if (columnList[i].type === 'CHINA') {
                        if (values[columnList[i].select.returnProvinceKey] !== '') {
                            let selectChina = [];
                            if (columnList[i].select.returnProvinceKey === columnList[i].select.returnProvinceValue) {
                                for (let j = 0; j < china.length; j++) {
                                    var province = china[j];

                                    if (data[columnList[i].select.returnProvinceKey] === province.label) {
                                        selectChina.push(province.value);

                                        for (let k = 0; k < province.children.length; k++) {
                                            let city = province.children[k];

                                            if (data[columnList[i].select.returnCityKey] === city.label) {
                                                selectChina.push(city.value);

                                                for (let l = 0; l < city.children.length; l++) {
                                                    let area = city.children[l];

                                                    if (data[columnList[i].select.returnAreaKey] === area.label) {
                                                        selectChina.push(area.value);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            } else {
                                selectChina.push(data[columnList[i].select.returnProvinceKey]);
                                selectChina.push(data[columnList[i].select.returnCityKey]);
                                selectChina.push(data[columnList[i].select.returnAreaKey]);
                            }

                            values[columnList[i].id] = selectChina;
                        }
                    } else {
                        values[columnList[i].id] = data[columnList[i].id];
                    }
                }

                this.props.form.setFieldsValue(values);

                let states = {systemVersion: data.systemVersion};

                if (this.props.submitKey && this.props.submitKey.length) {
                    for (let str of this.props.submitKey) {
                        states[str] = data[str];
                    }
                }
                this.setState(states);
            }.bind(this),
            complete: function () {
                this.setState({
                    isLoad: false
                });

            }.bind(this)
        });
    }

    handleSubmit () {
        if (this.state.isLoad) {
            return;
        }

        this.props.form.validateFieldsAndScroll((errors, values) => {
            if (!!errors) {
                return;
            }
            let columnList = this.props.columnList;
            for (let i = 0; i < columnList.length; i++) {
                if (columnList[i].type === 'SELECT') {
                    if (typeof (columnList[i].labelInValue) === 'undefined' || columnList[i].labelInValue === true) {
                        for (let value in values) {
                            if (value === columnList[i].id) {
                                if (columnList[i].select.mode && columnList[i].select.mode === 'multiple') {
                                    let items = [];
                                    for (let j = 0; j < values[value].length; j++) {
                                        let item = {};
                                        item[columnList[i].select.returnKey] = values[value][j].key;
                                        item[columnList[i].select.returnValue] = values[value][j].label;
                                        item[columnList[i].select.returnSort] = j;
                                        items.push(item);
                                    }
                                    delete values[value];
                                    values[columnList[i].select.returnRefName] = JSON.stringify(items);
                                } else {
                                    let item = Object.assign({}, values[value]);
                                    item[columnList[i].select.returnKey] = item.key;
                                    item[columnList[i].select.returnValue] = item.label;
                                    delete item.key;
                                    delete item.label;
                                    delete item.title;

                                    values = Object.assign({}, values, item);
                                    if (value !== columnList[i].select.returnKey) {
                                        delete values[value];
                                    }
                                }

                            }
                        }
                    }
                } else if (columnList[i].type === 'TREE_SELECT') {
                    if (typeof (columnList[i].labelInValue) === 'undefined' || columnList[i].labelInValue === true) {
                        for (let value in values) {
                            if (value === columnList[i].id) {
                                let item = Object.assign({}, values[value]);
                                item[columnList[i].select.returnKey] = item.value;
                                item[columnList[i].select.returnValue] = item.label;
                                delete item.value;
                                delete item.label;

                                values = Object.assign({}, values, item);
                                delete values[value];
                            }
                        }
                    }
                } else if (columnList[i].type === 'MEDIA') {
                    for (let value in values) {
                        if (value === columnList[i].id) {
                            if (columnList[i].returnLimit === 1) {
                                let item = Object.assign({}, values[value][0]);
                                item[columnList[i].returnKey] = item.value;
                                item[columnList[i].returnValue] = item.label;
                                delete item.value;
                                delete item.label;

                                values = Object.assign({}, values, item);
                                delete values[value];
                            } else if (columnList[i].returnLimit > 1) {
                                let items = [];
                                for (let j = 0; j < values[value].length; j++) {
                                    let item = {};
                                    item[columnList[i].returnKey] = values[value][j].value;
                                    item[columnList[i].returnValue] = values[value][j].label;
                                    item[columnList[i].returnSort] = j;

                                    items.push(item);
                                }
                                delete values[value];
                                values[columnList[i].returnRefName] = JSON.stringify(items);
                            } else {

                            }
                        }
                    }
                } else if (columnList[i].type === 'CHINA') {
                    if (values[columnList[i].id] === '') {
                        values[columnList[i].select.returnProvinceKey] = '';
                        values[columnList[i].select.returnProvinceValue] = '';
                        values[columnList[i].select.returnCityKey] = '';
                        values[columnList[i].select.returnCityValue] = '';
                        values[columnList[i].select.returnAreaeKey] = '';
                        values[columnList[i].select.returnAreaValue] = '';
                    } else {
                        let returnProvinceKey = values[columnList[i].id][0];
                        let returnProvinceValue = '';
                        let returnCityKey = values[columnList[i].id][1];
                        let returnCityValue = '';
                        let returnAreaeKey = values[columnList[i].id][2];
                        let returnAreaValue = '';

                        for (let j = 0; j < china.length; j++) {
                            var province = china[j];

                            if (returnProvinceKey === province.value) {
                                returnProvinceValue = province.label;

                                for (let k = 0; k < province.children.length; k++) {
                                    let city = province.children[k];

                                    if (returnCityKey === city.value) {
                                        returnCityValue = city.label;

                                        for (let l = 0; l < city.children.length; l++) {
                                            let area = city.children[l];

                                            if (returnAreaeKey === area.value) {
                                                returnAreaValue = area.label;
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        values[columnList[i].select.returnProvinceKey] = returnProvinceKey;
                        values[columnList[i].select.returnProvinceValue] = returnProvinceValue;
                        values[columnList[i].select.returnCityKey] = returnCityKey;
                        values[columnList[i].select.returnCityValue] = returnCityValue;
                        values[columnList[i].select.returnAreaeKey] = returnAreaeKey;
                        values[columnList[i].select.returnAreaValue] = returnAreaValue;

                    }

                    delete values[columnList[i].id];
                } else if (columnList[i].type === 'DATE_PICKER') {
                    if (values[columnList[i].id] === null) {
                        delete values[columnList[i].id];
                    }
                }
            }

            // console.log(values);
            // return;

            this.setState({
                isLoad: true
            });

            if (this.state.isEdit) {
                values[this.props.primaryKey] = this.props.match.params[this.props.primaryKey];
            }
            values.systemVersion = this.state.systemVersion;

            if (this.props.submitKey && this.props.submitKey.length) {
                for (let str of this.props.submitKey) {
                    values[str] = this.state[str];
                }
            }

            http.request({
                url: this.props.baseUrl + '/' + (this.state.isEdit ? 'update' : 'save'),
                data: values,
                success: function (data) {
                    message.success(constant.success);

                    this.handleBack();
                }.bind(this),
                complete: function () {
                    this.setState({
                        isLoad: false
                    });
                }.bind(this)
            });
        });
    }

    handleDelete () {
        if (this.state.isLoad) {
            return;
        }

        Modal.confirm({
            title: '确定要删除该数据吗?',
            content: '数据删除之后就不能恢复了',
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk: function () {
                this.setState({
                    isLoad: true
                });

                let values = {};
                values[this.props.primaryKey] = this.props.match.params[this.props.primaryKey];
                values.systemVersion = this.state.systemVersion;

                http.request({
                    url: this.props.baseUrl + '/delete',
                    data: values,
                    success: function (data) {
                        message.success(constant.success);

                        this.handleBack();
                    }.bind(this),
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

    handleReplace () {
        this.setState({
            isLoad: true
        });

        let values = {};
        values[this.props.primaryKey] = this.props.match.params[this.props.primaryKey];

        http.request({
            url: this.props.baseUrl + '/synchronize',
            data: values,
            success: function (data) {
                message.success(constant.success);

                this.setState({
                    isLoad: false
                }, function () {
                    this.handleLoad()
                }.bind(this));
            }.bind(this),
            complete: function () {

            }
        });
    }

    handleReset () {
        this.props.form.resetFields();
    }

    handleBack () {
        this.props.history.goBack();
    }

    render () {
        const {getFieldDecorator, getFieldValue, setFieldsValue} = this.props.form;

        let buttonList = [];
        for (let i = 0; i < this.props.buttonList.length; i++) {
            let button = {
                name: this.props.buttonList[i].name,
                icon: this.props.buttonList[i].icon,
                isPrimary: this.props.buttonList[i].isPrimary
            };

            switch (this.props.buttonList[i].type) {
                case 'SUBMIT':
                    button.click = this.handleSubmit.bind(this);
                    break;
                case 'BACK':
                    button.click = this.handleBack.bind(this);
                    break;
                case 'DELETE':
                    button.click = this.handleDelete.bind(this);
                    break;
                default:
                    button.click = this.props.buttonList[i].click;
                    break;
            }

            buttonList.push(button);
        }

        let secondButtonList = [];
        for (let i = 0; i < this.props.secondButtonList.length; i++) {
            let button = {
                name: this.props.secondButtonList[i].name,
                icon: this.props.secondButtonList[i].icon
            };

            switch (this.props.secondButtonList[i].type) {
                case 'BACK':
                    button.click = this.handleBack.bind(this);
                    break;
                case 'DELETE':
                    button.click = this.handleDelete.bind(this);
                    break;
                case 'REPLACE':
                    button.click = this.handleReplace.bind(this);
                    break;
                default:
                    button.click = this.props.secondButtonList[i].click;
                    break;
            }

            secondButtonList.push(button);
        }

        return (
            <div>
                <NHeader name={this.props.title}
                         isList={false}
                         isEdit={this.state.isEdit}
                         breadcrumbList={this.props.breadcrumbList}
                         buttonList={buttonList}
                         secondButtonList={secondButtonList}/>
                <div className="page-content">
                    <Form>
                        {
                            this.props.columnList.map(function (column) {
                                return (
                                    <Row key={column.id}>
                                        <NCol>
                                            {(function () {
                                                switch (column.type) {
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
                                                        );
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
                                                        );
                                                    case 'BOOLEAN':
                                                        return (
                                                            <NSwitch id={column.id}
                                                                     label={column.name}
                                                                     initialValue={column.initialValue}
                                                                     checkedChildren={column.checkedChildren}
                                                                     unCheckedChildren={column.unCheckedChildren}
                                                                     getFieldDecorator={getFieldDecorator}
                                                                     getFieldValue={getFieldValue}
                                                                     setFieldsValue={setFieldsValue}/>
                                                        );
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
                                                        );
                                                    case 'TREE_SELECT':
                                                        return (
                                                            <NTreeSelect id={column.id}
                                                                         label={column.name}
                                                                         required={column.required}
                                                                         multiple={column.select.multiple}
                                                                         treeCheckable={column.select.treeCheckable}
                                                                         treeDefaultExpandAll={column.select.treeDefaultExpandAll}
                                                                         remoteOptionConfig={column.select.remoteOptionConfig}
                                                                         returnKey={column.select.returnKey}
                                                                         returnValue={column.select.returnValue}
                                                                         returnObject={column.select.returnObject}
                                                                         getFieldDecorator={getFieldDecorator}
                                                                         getFieldValue={getFieldValue}
                                                                         setFieldsValue={setFieldsValue}
                                                                         labelInValue={typeof (column.labelInValue) === 'undefined' ? true : column.labelInValue}/>
                                                        );
                                                    case 'HTML':
                                                        return (
                                                            <NInputHtml id={column.id}
                                                                        label={column.name}
                                                                        getFieldDecorator={getFieldDecorator}
                                                                        getFieldValue={getFieldValue}
                                                                        setFieldsValue={setFieldsValue}/>
                                                        );
                                                    case 'DATE_PICKER':
                                                        return (
                                                            <NInputDate id={column.id}
                                                                        required={column.required}
                                                                        label={column.name}
                                                                        type={column.type}
                                                                        showTime={column.showTime}
                                                                        initialValue={column.initialValue}
                                                                        format={column.format}
                                                                        getFieldDecorator={getFieldDecorator}
                                                                        getFieldValue={getFieldValue}
                                                                        setFieldsValue={setFieldsValue}/>
                                                        );
                                                    case 'MEDIA':
                                                        return (
                                                            <NInputMedia id={column.id}
                                                                         label={column.name}
                                                                         type={column.type}
                                                                         required={column.required}
                                                                         aspect={column.aspect}
                                                                         returnLimit={column.returnLimit}
                                                                         returnKey={column.returnKey}
                                                                         returnValue={column.returnValue}
                                                                         supportUploadTypes={column.supportUploadTypes}
                                                                         getFieldDecorator={getFieldDecorator}
                                                                         getFieldValue={getFieldValue}
                                                                         setFieldsValue={setFieldsValue}/>
                                                        );
                                                    case 'CHINA':
                                                        return (
                                                            <NInputChina id={column.id}
                                                                         type={column.inputType}
                                                                         label={column.name}
                                                                         required={column.required}
                                                                         getFieldDecorator={getFieldDecorator}
                                                                         defaultValue={column.defaultValue}
                                                                         onPressEnter={this.handleSubmit.bind(this)}/>
                                                        );
                                                    case 'TABLE':
                                                        return (
                                                            <NTable id={column.id}
                                                                    type={column.inputType}
                                                                    label={column.name}
                                                                    dataSource={column.dataSource}
                                                                    columns={column.columns}
                                                                    required={column.required}
                                                                    getFieldDecorator={getFieldDecorator}
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
                        <Row>
                            <NCol>
                                <Col xs={{span: 24}}
                                     sm={{span: 17, offset: 4}}
                                     md={{span: 17, offset: 4}}
                                     lg={{span: 17, offset: 4}}
                                     xl={{span: 17, offset: 4}}>
                                    <Button type="primary"
                                            icon="check-circle"
                                            loading={this.state.isLoad}
                                            className="page-button-left"
                                            onClick={this.handleSubmit.bind(this)}>
                                        提交
                                    </Button>
                                    <Button icon="reload"
                                            loading={this.state.isLoad}
                                            onClick={this.handleReset.bind(this)}>
                                        重置
                                    </Button>
                                </Col>
                            </NCol>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}

NDetail.propTypes = {
    id: PropTypes.string.isRequired,
    baseUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    primaryKey: PropTypes.string.isRequired,
    store: PropTypes.object.isRequired,
    breadcrumbList: PropTypes.array.isRequired,
    buttonList: PropTypes.array.isRequired,
    secondButtonList: PropTypes.array.isRequired,
    columnList: PropTypes.array.isRequired,
    filterList: PropTypes.array.isRequired
};

NDetail.defaultProps = {
    filterList: [{
        produc: {
            value: 'productNameId',
            label: 'productName'
        }
    }]
};

NDetail = Form.create()(NDetail);

export default NDetail;