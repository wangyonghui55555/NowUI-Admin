import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, TreeSelect} from 'antd';
import http from '../common/http';
import SelectType from "../emun/SelectType";
import notification from "../common/notification";

class NFinalTreeSelect extends Component {
	constructor (props) {
		super(props);

		this.state = {
			isDisabled: false,
			loadConfig: '',
			loadRequest: () => {
				return {}
			},
			loadResponse: () => {

			},
			optionList: [],
			notificationList: []
		}
	}

	componentDidMount () {
		if (this.props.selectStaticOption) {
			this.setState({
				optionList: this.props.selectStaticOption
			});
		}

		this.setState({
			isDisabled: this.props.formItemDisabled
		});
	}

	componentWillReceiveProps (nextProps) {

	}

	componentWillUnmount () {
		for (let name of this.state.notificationList) {
			notification.remove(name, this);
		}
	}

	handleSetValue (value) {
		let item = {};
		item[this.props.formItemKey] = value;

		this.props.setFieldsValue(item);
	}

	handleGetValue () {
		return this.props.getFieldValue(this.props.formItemKey);
	}

	handleChangeDisabled (disabled) {
		this.setState({
			isDisabled: disabled
		});
	}

	handleInitStaticSelect (optionList) {
		if (this.props.selectType === SelectType.STATIC) {
			this.setState({
				optionList: optionList
			});
		}
	}

	handleInitDynamicSelect (loadConfig, loadRequest, loadResponse) {
		if (this.props.selectType === SelectType.REMOTE) {
			this.setState({
				loadConfig: loadConfig,
				loadRequest: loadRequest,
				loadResponse: loadResponse
			}, () => {
				this.handleLoad();
			})
		}
	}

	handleOnNotification (notificationConfig, notificationResponse) {
		let notificationList = this.state.notificationList;

		notification.on(notificationConfig.name, this, function (data) {
			notificationResponse(data);
		});

		notificationList.push(notificationConfig.name);

		this.setState({
			notificationList: notificationList
		});
	}

	handleEmitNotification (notificationConfig, notificationResponse) {
		notification.emit(notificationConfig.name, notificationResponse());
	}

	handleLoad () {
		http.request({
			url: this.state.loadConfig.url,
			data: this.state.loadRequest(),
			success: function (data) {
				let optionList = this.handleTreeDataList(data, this.props.selectKeyName, this.props.selectValueName);

				this.setState({
					optionList: optionList
				});
			}.bind(this),
			error: function () {

			},
			complete: function () {

			}
		});
	}

	handleTreeDataList(treeDataList, key, value) {
		let newTreeDataList = [];
		if (treeDataList && treeDataList.length > 0) {
			for (let i = 0; i < treeDataList.length; i++) {
				let treeData = treeDataList[i];
				let childrenTreeData = this.handleTreeDataList(treeDataList[i].children, key, value);
				newTreeDataList.push({
					label: treeData[value],
					key: treeData[key],
					value: treeData[key],
					children: childrenTreeData
				})
			}
		}
		return newTreeDataList;
	}

	handleChange (data) {
		this.props.formItemOnChange(data);
	}

	render () {
		return (
			<Form.Item
				className="form-item"
				hasFeedback={true}
				label={this.props.formItemTitle}
				labelCol={{
					xs: {span: 24},
					sm: {span: this.props.formIsMultiCol ? 8 : 4},
					md: {span: this.props.formIsMultiCol ? 8 : 4},
					lg: {span: this.props.formIsMultiCol ? 8 : 4},
					xl: {span: this.props.formIsMultiCol ? 8 : 4}
				}}
				wrapperCol={{
					xs: {span: 24},
					sm: {span: this.props.formIsMultiCol ? 16 : 17},
					md: {span: this.props.formIsMultiCol ? 16 : 17},
					lg: {span: this.props.formIsMultiCol ? 16 : 10},
					xl: {span: this.props.formIsMultiCol ? 16 : 10}
				}}>
				{this.props.getFieldDecorator(this.props.formItemKey, {
					rules: [{
						required: this.props.formItemRequired,
						message: this.props.formItemTitle + '不能为空'
					}],
					initialValue: JSON.stringify(this.props.formItemInitValue) === '{}' ? undefined : this.props.formItemInitValue
				})(
					<TreeSelect labelInValue={this.props.formLabelInValue}
								disabled={this.state.isDisabled}
								treeData={this.state.optionList}
								placeholder={this.props.formItemPlaceholder}
								allowClear={true}
								onSelect={this.handleChange.bind(this)}>
					</TreeSelect>
				)}
			</Form.Item>
		);
	}
}

NFinalTreeSelect.propTypes = {
	formItemKey: PropTypes.string.isRequired,
	formItemTitle: PropTypes.string.isRequired,
	formItemInitValue: PropTypes.any.isRequired,
	formItemPlaceholder: PropTypes.string.isRequired,
	formIsMultiCol: PropTypes.bool.isRequired,
	formItemRequired: PropTypes.bool.isRequired,
	formLabelInValue: PropTypes.bool.isRequired,
	formItemDisabled: PropTypes.bool.isRequired,
	selectType: PropTypes.string.isRequired,
	selectKeyName: PropTypes.string.isRequired,
	selectValueName: PropTypes.string.isRequired,
	selectStaticOption: PropTypes.array,
	formItemOnChange: PropTypes.func.isRequired,
	cardFormItemOnPressEnter: PropTypes.func.isRequired,
	getFieldDecorator: PropTypes.func.isRequired,
	getFieldValue: PropTypes.func.isRequired,
	setFieldsValue: PropTypes.func.isRequired
};

NFinalTreeSelect.defaultProps = {};

export default NFinalTreeSelect