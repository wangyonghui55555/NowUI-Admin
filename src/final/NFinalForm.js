import React from 'react';
import PropTypes from 'prop-types';
import {Form} from 'antd';

import NFinalSelect from './NFinalSelect';
import NFinalTreeSelect from './NFinalTreeSelect';
import NFinalInputText from './NFinalInputText';
import NFinalInputNumber from './NFinalInputNumber';
import NFinalImage from './NFinalImage';
import NFinalChina from './NFinalChina';
import NFinalHtml from "./NFinalHtml";

import NCol from '../component/NCol';
import NSwitch from '../component/NSwitch';

import FormItemType from "../emun/FormItemType";
import NFinalInputTextArea from "./NFinalInputTextArea";
import NFinalDatePicker from "./NFinalDatePicker";

class NFinalForm extends React.Component {
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
						<NFinalInputText ref={formItem.formItemKey}
										 formItemKey={formItem.formItemKey}
										 formItemTitle={formItem.formItemTitle}
										 formItemInitValue={formItem.formItemInitValue}
										 formItemPlaceholder={formItem.formItemPlaceholder}
										 formIsMultiCol={this.props.formIsMultiCol}
										 formItemRequired={formItem.formItemRequired}
										 formItemDisabled={formItem.formItemDisabled}
										 formItemOnChange={formItem.formItemOnChange}
										 cardFormItemOnPressEnter={this.props.cardFormItemOnPressEnter}
										 getFieldDecorator={getFieldDecorator}
										 getFieldValue={getFieldValue}
										 setFieldsValue={setFieldsValue}/>
					);
				case FormItemType.LONG_VARCHAR:
					return (
						<NFinalInputTextArea ref={formItem.formItemKey}
											 formItemKey={formItem.formItemKey}
											 formItemTitle={formItem.formItemTitle}
											 formItemInitValue={formItem.formItemInitValue}
											 formItemPlaceholder={formItem.formItemPlaceholder}
											 formIsMultiCol={this.props.formIsMultiCol}
											 formItemRequired={formItem.formItemRequired}
											 formItemDisabled={formItem.formItemDisabled}
											 formItemOnChange={formItem.formItemOnChange}
											 cardFormItemOnPressEnter={this.props.cardFormItemOnPressEnter}
											 getFieldDecorator={getFieldDecorator}
											 getFieldValue={getFieldValue}
											 setFieldsValue={setFieldsValue}/>
					);
				case FormItemType.NUMBER:
					return (
						<NFinalInputNumber ref={formItem.formItemKey}
										   formItemKey={formItem.formItemKey}
										   formItemTitle={formItem.formItemTitle}
										   formItemInitValue={formItem.formItemInitValue}
										   formItemPlaceholder={formItem.formItemPlaceholder}
										   formItemMin={formItem.formItemMin}
										   formItemMax={formItem.formItemMax}
										   formItemStep={formItem.formItemStep}
										   formIsMultiCol={this.props.formIsMultiCol}
										   formItemRequired={formItem.formItemRequired}
										   formItemDisabled={formItem.formItemDisabled}
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
						<NFinalSelect ref={formItem.formItemKey}
									  formItemKey={formItem.formItemKey}
									  formItemTitle={formItem.formItemTitle}
									  formItemInitValue={formItem.formItemInitValue}
									  formItemPlaceholder={formItem.formItemPlaceholder}
									  formIsMultiCol={this.props.formIsMultiCol}
									  formItemRequired={formItem.formItemRequired}
									  formLabelInValue={formItem.formLabelInValue}
									  formItemDisabled={formItem.formItemDisabled}
									  selectType={formItem.selectType}
									  selectKeyName={formItem.selectKeyName}
									  selectValueName={formItem.selectValueName}
									  selectStaticOption={formItem.selectStaticOption}
									  formItemOnChange={formItem.formItemOnChange}
									  cardFormItemOnPressEnter={this.props.cardFormItemOnPressEnter}
									  getFieldDecorator={getFieldDecorator}
									  getFieldValue={getFieldValue}
									  setFieldsValue={setFieldsValue}/>
					);
				case FormItemType.TREE_SELECT:
					return (
						<NFinalTreeSelect ref={formItem.formItemKey}
										  formItemKey={formItem.formItemKey}
										  formItemTitle={formItem.formItemTitle}
										  formItemInitValue={formItem.formItemInitValue}
										  formItemPlaceholder={formItem.formItemPlaceholder}
										  formIsMultiCol={this.props.formIsMultiCol}
										  formItemRequired={formItem.formItemRequired}
										  formLabelInValue={formItem.formLabelInValue}
										  formItemDisabled={formItem.formItemDisabled}
										  selectType={formItem.selectType}
										  selectKeyName={formItem.selectKeyName}
										  selectValueName={formItem.selectValueName}
										  selectStaticOption={formItem.selectStaticOption}
										  formItemOnChange={formItem.formItemOnChange}
										  cardFormItemOnPressEnter={this.props.cardFormItemOnPressEnter}
										  getFieldDecorator={getFieldDecorator}
										  getFieldValue={getFieldValue}
										  setFieldsValue={setFieldsValue}/>
					);
				case FormItemType.HTML:
					return (
						<NFinalHtml ref={formItem.formItemKey}
									formItemKey={formItem.formItemKey}
									formItemTitle={formItem.formItemTitle}
									formItemInitValue={formItem.formItemInitValue}
									formItemPlaceholder={formItem.formItemPlaceholder}
									formIsMultiCol={this.props.formIsMultiCol}
									formItemRequired={formItem.formItemRequired}
									formItemDisabled={formItem.formItemDisabled}
									formItemOnChange={formItem.formItemOnChange}
									cardFormItemOnPressEnter={this.props.cardFormItemOnPressEnter}
									getFieldDecorator={getFieldDecorator}
									getFieldValue={getFieldValue}
									setFieldsValue={setFieldsValue}/>
					);
				case FormItemType.DATE_PICKER:
					return (
						<NFinalDatePicker ref={formItem.formItemKey}
										  formItemKey={formItem.formItemKey}
										  formItemTitle={formItem.formItemTitle}
										  formItemInitValue={formItem.formItemInitValue}
										  formItemPlaceholder={formItem.formItemPlaceholder}
										  formIsMultiCol={this.props.formIsMultiCol}
										  formItemRequired={formItem.formItemRequired}
										  formItemDisabled={formItem.formItemDisabled}
										  formItemOnChange={formItem.formItemOnChange}
										  cardFormItemOnPressEnter={this.props.cardFormItemOnPressEnter}
										  getFieldDecorator={getFieldDecorator}
										  getFieldValue={getFieldValue}
										  setFieldsValue={setFieldsValue}/>
					);
				case FormItemType.IMAGE:
					return (
						<NFinalImage formItemKey={formItem.formItemKey}
									 formItemTitle={formItem.formItemTitle}
									 formItemInitValue={formItem.formItemInitValue}
									 formItemPlaceholder={formItem.formItemPlaceholder}
									 formIsMultiCol={this.props.formIsMultiCol}
									 formItemRequired={formItem.formItemRequired}
									 formItemDisabled={formItem.formItemDisabled}
									 formItemOnChange={formItem.formItemOnChange}
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
						<NFinalChina ref={formItem.formItemKey}
									 formItemKey={formItem.formItemKey}
									 formItemTitle={formItem.formItemTitle}
									 formItemInitValue={formItem.formItemInitValue}
									 formItemPlaceholder={formItem.formItemPlaceholder}
									 formIsMultiCol={this.props.formIsMultiCol}
									 formItemRequired={formItem.formItemRequired}
									 formItemDisabled={formItem.formItemDisabled}
									 formItemOnChange={formItem.formItemOnChange}
									 cardFormItemOnPressEnter={this.props.cardFormItemOnPressEnter}
									 getFieldDecorator={getFieldDecorator}
									 getFieldValue={getFieldValue}
									 setFieldsValue={setFieldsValue}/>

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

NFinalForm.propTypes = {
	formIsMultiCol: PropTypes.bool.isRequired,
	formItemList: PropTypes.array.isRequired,
	cardFormItemOnPressEnter: PropTypes.func.isRequired
};

NFinalForm.defaultProps = {};

NFinalForm = Form.create()(NFinalForm);

export default NFinalForm