import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Input} from 'antd';

class NInputText extends Component {
	constructor(props) {
		super(props);

		this.state = {}
	}

	componentDidMount() {

	}

	componentWillReceiveProps(nextProps) {

	}

	componentWillUnmount() {

	}

	render() {
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
				wrapperCol={typeof (this.props.wrapperCol) === 'undefined' ? {
					xs: {span: 24},
					sm: {span: this.props.multiLine ? 16 : 17},
					md: {span: this.props.multiLine ? 16 : 17},
					lg: {span: this.props.multiLine ? 16 : 10},
					xl: {span: this.props.multiLine ? 16 : 10}
				} : this.props.wrapperCol}
				className="form-item"
			>
				{this.props.getFieldDecorator(this.props.id, {
					rules: [{
						required: this.props.required,
						message: this.props.message === '' ? (this.props.label === '' ? this.props.placeholder : '请输入' + this.props.label) : ''
					}],
					initialValue: this.props.initialValue
				})(
					<Input type={this.props.type}
						   size={this.props.size}
						   prefix={this.props.prefix}
                           disabled={this.props.disabled}
						   placeholder={this.props.placeholder === '' ? ('请输入' + this.props.label) : this.props.placeholder}
						   onPressEnter={this.props.onPressEnter}
					/>
				)}
			</Form.Item>
		);
	}
}

NInputText.propTypes = {
	getFieldDecorator: PropTypes.func.isRequired,
	getFieldValue: PropTypes.func.isRequired,
	setFieldsValue: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
    disabled: PropTypes.bool,
	message: PropTypes.string,
	prefix: PropTypes.object,
	size: PropTypes.string,
	onPressEnter: PropTypes.func,
	multiLine: PropTypes.bool.isRequired,
	wrapperCol: PropTypes.object,
	initialValue: PropTypes.string
};

NInputText.defaultProps = {
	label: '',
	placeholder: '',
	required: false,
    disabled: false,
	message: '',
	size: 'default',
	type: 'text',
    multiLine: false,
	initialValue: ''
};

export default NInputText