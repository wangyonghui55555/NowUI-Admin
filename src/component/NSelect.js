import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Select} from 'antd';
import http from '../common/http';

class NSelect extends Component {
	constructor(props) {
		super(props);

		this.state = {
			optionList: []
		}
	}

	componentDidMount() {
		let {url, params, key, value} = this.props.remoteOptionConfig;

		if (url) {
			this.handleLoadOptionList(url, params, key, value);
		}
	}

	componentWillReceiveProps(nextProps) {

	}

	componentWillUnmount() {

	}

	handleLoadOptionList(url, params, key, value) {
		http.request({
			url: url,
			data: params,
			success: function (data) {
                let optionList = data.map(function (option) {
                    return {
                        key: option[key],
                        value: option[value]
                    }
                });

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

	render() {
		const Option = Select.Option;
		let optionList = this.props.staticOptionList.concat(this.state.optionList);
		return (
			<Form.Item
				hasFeedback={true}
				label={this.props.label}
				labelCol={{
					xs: {span: 24},
					sm: {span: this.props.multiLine ? 8 : 4},
					md: {span: this.props.multiLine ? 8 : 4},
					lg: {span: this.props.multiLine ? 8 : 4},
					xl: {span: this.props.multiLine ? 8 : 4}
				}}
				wrapperCol={{
					xs: {span: 24},
					sm: {span: this.props.multiLine ? 16 : 17},
					md: {span: this.props.multiLine ? 16 : 17},
					lg: {span: this.props.multiLine ? 16 : 10},
					xl: {span: this.props.multiLine ? 16 : 10}
				}}
				className="form-item">
				{this.props.getFieldDecorator(this.props.id, {
					rules: [{
						required: this.props.required,
						type: this.props.mode === 'multiple' ? 'array' : this.props.labelInValue ? 'object' : 'string',
						message: this.props.message === '' ? (this.props.label === '' ? this.props.placeholder : '选择' + this.props.label) : ''
					}],
					initialValue: this.props.initialValue
				})(
					<Select allowClear={this.props.allowClear}
							labelInValue={this.props.labelInValue}
							placeholder={this.props.placeholder === '' ? ('请选择' + this.props.label) : this.props.placeholder}
							size={this.props.size}
							mode={this.props.mode}
							disabled={this.props.disabled}
							filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
							showSearch={this.props.showSearch}
					>
						{
							optionList && optionList.length > 0 ?
								optionList.map(function (option) {
									return (
										<Option key={option.key} value={option.key}>{option.value}</Option>
									)
								})
								:
								null
						}
					</Select>
				)}
			</Form.Item>
		);
	}
}

NSelect.propTypes = {
	getFieldDecorator: PropTypes.func.isRequired,
	getFieldValue: PropTypes.func.isRequired,
	setFieldsValue: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	labelInValue: PropTypes.bool,
    disabled: PropTypes.bool,
	message: PropTypes.string,
	size: PropTypes.string,
	multiLine: PropTypes.bool,
	staticOptionList: PropTypes.array,
	remoteOptionConfig: PropTypes.object,
	allowClear: PropTypes.bool,
	mode: PropTypes.oneOf(['multiple', 'tags', 'combobox']),
	showSearch: PropTypes.bool,
	initialValue: PropTypes.any
};

NSelect.defaultProps = {
	label: '',
	placeholder: '',
	required: false,
	labelInValue: true,
    disabled: false,
	message: '',
	size: 'default',
	multiLine: false,
	staticOptionList: [],
	remoteOptionConfig: {},
	allowClear: true,
	showSearch: true,
	initialValue: []

};

export default NSelect