import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, DatePicker} from 'antd';
import moment from 'moment';

class NInputDate extends Component {
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
		const {MonthPicker, RangePicker, WeekPicker} = DatePicker;
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
				className="form-item"
			>
				{this.props.getFieldDecorator(this.props.id, {
					rules: [{
						required: this.props.required,
						message: this.props.message === '' ? (this.props.label === '' ? this.props.placeholder : '请输入日期时间') : ''
					}],
					initialValue: this.props.initialValue
				})(
					this.props.type === 'DATE_PICKER' ?
						<DatePicker
							size={this.props.size}
							allowClear={this.props.allowClear}
							showTime={this.props.showTime}
							format={this.props.format}
							placeholder={this.props.placeholder === '' ? ('请选择日期时间') : this.props.placeholder}
							onPressEnter={this.props.onPressEnter}
						/>
						:
						this.props.type === 'MONTH_PICKER' ?
							<MonthPicker
								size={this.props.size}
								allowClear={this.props.allowClear}
								placeholder={this.props.placeholder === '' ? ('请选择' + this.props.label) : this.props.placeholder}
								onPressEnter={this.props.onPressEnter}
							/>
							:
							this.props.type === 'RANEG_PICKER' ?
								<RangePicker
									size={this.props.size}
									allowClear={this.props.allowClear}
									placeholder={this.props.placeholder === '' ? ('请选择' + this.props.label) : this.props.placeholder}
									onPressEnter={this.props.onPressEnter}
								/>
								:
								this.props.type === 'WEEK_PICKER' ?
									<WeekPicker
										size={this.props.size}
										allowClear={this.props.allowClear}
										placeholder={this.props.placeholder === '' ? ('请选择' + this.props.label) : this.props.placeholder}
										onPressEnter={this.props.onPressEnter}
									/>
									:
									null
				)}
			</Form.Item>
		);
	}
}

NInputDate.propTypes = {
	getFieldDecorator: PropTypes.func.isRequired,
	getFieldValue: PropTypes.func.isRequired,
	setFieldsValue: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	message: PropTypes.string,
	prefix: PropTypes.object,
	size: PropTypes.string,
	onPressEnter: PropTypes.func,
	multiLine: PropTypes.bool,
	type: PropTypes.oneOf(['DATE_PICKER', 'MONTH_PICKER', 'RANGE_PICKER', 'WEEK_PICKER']),
	allowClear: PropTypes.bool,
	showTime: PropTypes.bool,
	format: PropTypes.string,
	initialValue: PropTypes.instanceOf(moment)
};

NInputDate.defaultProps = {
	label: '',
	placeholder: '',
	required: false,
	message: '',
	size: 'default',
	multiLine: false,
	type: 'DatePicker',
	allowClear: false,
	showTime: false,
	initialValue: null
};

export default NInputDate