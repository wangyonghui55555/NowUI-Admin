import React from 'react';
import PropTypes from 'prop-types';
import {Form} from 'antd';

import NSuperSelect from './NSuperSelect';
import NSuperInputText from './NSuperInputText';
import NSuperInputNumber from './NSuperInputNumber';
import NSuperImage from './NSuperImage';

import NCol from '../component/NCol';
import NInputTextArea from '../component/NInputTextArea';
import NSwitch from '../component/NSwitch';
import NTreeSelect from '../component/NTreeSelect';
import NInputHtml from '../component/NInputHtml';
import NInputDate from '../component/NInputDate';
import NInputChina from '../component/NInputChina';

import FormItemType from "../emun/FormItemType";

class NSuperForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    componentDidMount () {

    }

    componentWillUnmount () {

    }

    render () {
        const {getFieldDecorator, getFieldValue, setFieldsValue} = this.props.form;

        const handleRenderFormItem = function (formItem) {
            switch (formItem.formItemType) {
                case FormItemType.VARCHAR:
                    return (
                        <NSuperInputText formItemKey={formItem.formItemKey}
                                         formItemTitle={formItem.formItemTitle}
                                         formItemInitValue={formItem.formItemInitValue}
                                         formItemPlaceholder={formItem.formItemPlaceholder}
                                         formIsMultiCol={this.props.formIsMultiCol}
                                         formItemRequired={formItem.formItemRequired}
                                         formItemDisabled={formItem.formItemDisabled}
                                         cardFormItemOnPressEnter={this.props.cardFormItemOnPressEnter}
                                         getFieldDecorator={getFieldDecorator}
                                         getFieldValue={getFieldValue}
                                         setFieldsValue={setFieldsValue}/>
                    );
                case FormItemType.LONG_VARCHAR:
                    return (
                        <NInputTextArea id={formItem.formItemKey}
                                        label={formItem.formItemTitle}
                                        rows={formItem.formItemRows}
                                        required={formItem.formItemRequired}
                                        getFieldDecorator={getFieldDecorator}
                                        getFieldValue={getFieldValue}
                                        setFieldsValue={setFieldsValue}
                                        onPressEnter={this.props.cardFormItemOnPressEnter}/>
                    );
                case FormItemType.NUMBER:
                    return (
                        <NSuperInputNumber formItemKey={formItem.formItemKey}
                                           formItemTitle={formItem.formItemTitle}
                                           formItemInitValue={formItem.formItemInitValue}
                                           formItemPlaceholder={formItem.formItemPlaceholder}
                                           formItemMin={formItem.formItemMin}
                                           formItemMax={formItem.formItemMax}
                                           formItemStep={formItem.formItemStep}
                                           formIsMultiCol={this.props.formIsMultiCol}
                                           formItemRequired={formItem.formItemRequired}
                                           formItemDisabled={formItem.formItemDisabled}
                                           formItemInit={formItem.formItemInit}
                                           formItemOnChange={formItem.formItemOnChange}
                                           cardFormItemOnPressEnter={this.props.cardFormItemOnPressEnter}
                                           getFieldDecorator={getFieldDecorator}
                                           getFieldValue={getFieldValue}
                                           setFieldsValue={setFieldsValue}/>
                    );
                case FormItemType.BOOLEAN:
                    return (
                        <NSwitch id={formItem.formItemKey}
                                 label={formItem.formItemTitle}
                                 initialValue={formItem.initialValue}
                                 checkedChildren={formItem.checkedChildren}
                                 unCheckedChildren={formItem.unCheckedChildren}
                                 getFieldDecorator={getFieldDecorator}
                                 getFieldValue={getFieldValue}
                                 setFieldsValue={setFieldsValue}/>
                    );
                case FormItemType.SELECT:
                    return (
                        <NSuperSelect formItemKey={formItem.formItemKey}
                                      formItemTitle={formItem.formItemTitle}
                                      formItemInitValue={formItem.formItemInitValue}
                                      formItemPlaceholder={formItem.formItemPlaceholder}
                                      formIsMultiCol={this.props.formIsMultiCol}
                                      formLabelInValue={formItem.formLabelInValue}
                                      formItemRequired={formItem.formItemRequired}
                                      formItemDisabled={formItem.formItemDisabled}
                                      selectType={formItem.selectType}
                                      selectKeyName={formItem.selectKeyName}
                                      selectValueName={formItem.selectValueName}
                                      formItemInit={formItem.formItemInit}
                                      formItemOnChange={formItem.formItemOnChange}
                                      cardFormItemOnPressEnter={this.props.cardFormItemOnPressEnter}
                                      getFieldDecorator={getFieldDecorator}
                                      getFieldValue={getFieldValue}
                                      setFieldsValue={setFieldsValue}/>
                    );
                case FormItemType.TREE_SELECT:
                    return (
                        <NTreeSelect id={formItem.formItemKey}
                                     label={formItem.formItemTitle}
                                     required={formItem.formItemRequired}
                                     multiple={formItem.select.multiple}
                                     treeCheckable={formItem.select.treeCheckable}
                                     treeDefaultExpandAll={formItem.select.treeDefaultExpandAll}
                                     remoteOptionConfig={formItem.select.remoteOptionConfig}
                                     returnKey={formItem.select.returnKey}
                                     returnValue={formItem.select.returnValue}
                                     returnObject={formItem.select.returnObject}
                                     getFieldDecorator={getFieldDecorator}
                                     getFieldValue={getFieldValue}
                                     setFieldsValue={setFieldsValue}
                                     labelInValue={typeof (formItem.labelInValue) === 'undefined' ? true : formItem.labelInValue}/>
                    );
                case FormItemType.HTML:
                    return (
                        <NInputHtml id={formItem.formItemKey}
                                    label={formItem.formItemTitle}
                                    getFieldDecorator={getFieldDecorator}
                                    getFieldValue={getFieldValue}
                                    setFieldsValue={setFieldsValue}/>
                    );
                case FormItemType.DATE_PICKER:
                    return (
                        <NInputDate id={formItem.formItemKey}
                                    required={formItem.formItemRequired}
                                    label={formItem.formItemTitle}
                                    type={formItem.type}
                                    showTime={formItem.showTime}
                                    initialValue={formItem.initialValue}
                                    format={formItem.format}
                                    getFieldDecorator={getFieldDecorator}
                                    getFieldValue={getFieldValue}
                                    setFieldsValue={setFieldsValue}/>
                    );
                case FormItemType.IMAGE:
                    return (
                        <NSuperImage formItemKey={formItem.formItemKey}
                                     formItemTitle={formItem.formItemTitle}
                                     formItemInitValue={formItem.formItemInitValue}
                                     formItemPlaceholder={formItem.formItemPlaceholder}
                                     formIsMultiCol={this.props.formIsMultiCol}
                                     formItemRequired={formItem.formItemRequired}
                                     formItemDisabled={formItem.formItemDisabled}
                                     imageLimit={formItem.imageLimit}
                                     imageKeyName={formItem.imageKeyName}
                                     imageValueName={formItem.imageValueName}
                                     cardFormItemOnPressEnter={this.props.cardFormItemOnPressEnter}
                                     getFieldDecorator={getFieldDecorator}
                                     getFieldValue={getFieldValue}
                                     setFieldsValue={setFieldsValue}/>
                    );
                case FormItemType.CHINA:
                    return (
                        <NInputChina id={formItem.formItemKey}
                                     type={formItem.inputType}
                                     label={formItem.formItemTitle}
                                     required={formItem.formItemRequired}
                                     getFieldDecorator={getFieldDecorator}
                                     onPressEnter={this.props.cardFormItemOnPressEnter}/>
                    );
                // case FormItemType.TABLE:
                //     return (
                //         <NTable id={formItem.formItemKey}
                //                 type={formItem.inputType}
                //                 label={formItem.formItemTitle}
                //                 dataSource={formItem.dataSource}
                //                 formItems={formItem.formItems}
                //                 required={formItem.formItemRequired}
                //                 getFieldDecorator={getFieldDecorator}
                //                 onPressEnter={this.props.cardFormItemOnPressEnter}/>
                //     );
                default:
                    return '';
            }
        }.bind(this);

        return (
            <Form>
                {
                    this.props.formItemList.map(function (formItem, formItemIndex) {
                        return (
                            <NCol key={formItemIndex}
                                  multiLine={this.props.formIsMultiCol}>
                                {(function () {
                                    return handleRenderFormItem(formItem);
                                })()}
                            </NCol>
                        )
                    }.bind(this))
                }
            </Form>
        );
    }
}

NSuperForm.propTypes = {
    formIsMultiCol: PropTypes.bool.isRequired,
    formItemList: PropTypes.array.isRequired,
    cardFormItemOnPressEnter: PropTypes.func.isRequired
};

NSuperForm.defaultProps = {};

NSuperForm = Form.create()(NSuperForm);

export default NSuperForm