import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Select} from 'antd';
import http from '../common/http';
import SelectType from "../emun/SelectType";
import notification from "../common/notification";

class NFinalSelect extends Component {
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
		if (JSON.stringify(this.props.getFieldValue(this.props.formItemKey)) === '[]') {
            if (this.props.formLabelInValue) {
				return {};
            } else {
				return '';
            }
		} else {
            return this.props.getFieldValue(this.props.formItemKey);
		}
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

				let optionList = [];

				for (let i = 0; i < data.length; i++) {
					let option = {};
					option[this.props.selectKeyName] = data[i][this.props.selectKeyName];
					option[this.props.selectValueName] = data[i][this.props.selectValueName];

					optionList.push(option);
				}
				this.setState({
					optionList: optionList
				})
			}.bind(this),
			error: function () {

			},
			complete: function () {

			}
		});
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
					<Select labelInValue={this.props.formLabelInValue}
							disabled={this.state.isDisabled}
							placeholder={this.props.formItemPlaceholder}
							allowClear={true}
							showSearch
							onSelect={this.handleChange.bind(this)}>
						{
							this.state.optionList.map(function (option) {
								return (
									<Select.Option key={option[this.props.selectKeyName]}
												   value={option[this.props.selectKeyName]}>{option[this.props.selectValueName]}</Select.Option>
								)
							}.bind(this))
						}
					</Select>
				)}
			</Form.Item>
		);
	}
}

NFinalSelect.propTypes = {
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
	setFieldsValue: PropTypes.func.isRequired,
};

NFinalSelect.defaultProps = {};

export default NFinalSelect