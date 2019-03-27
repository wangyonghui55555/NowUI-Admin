import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Cascader} from 'antd';

import china from '../common/china';

class NInputChina extends Component {
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
						message: this.props.message === '' ? (this.props.label === '' ? this.props.placeholder : '请输入' + this.props.label) : ''
					}],
					initialValue: []
				})(
					<Cascader options={china}
							  placeholder={this.props.placeholder === '' ? ('请输入' + this.props.label) : this.props.placeholder}/>
				)}
			</Form.Item>
		);
	}
}

NInputChina.propTypes = {
    getFieldDecorator: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
    defaultValue: PropTypes.array,
	required: PropTypes.bool,
	message: PropTypes.string,
	prefix: PropTypes.object,
	size: PropTypes.string,
	onPressEnter: PropTypes.func,
	multiLine: PropTypes.bool
};

NInputChina.defaultProps = {
	label: '',
	placeholder: '',
	required: false,
	message: '',
	size: 'default',
	type: 'text',
	multiLine: false

};

export default NInputChina