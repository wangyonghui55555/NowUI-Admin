import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Input} from 'antd';

class NFinalInputText extends Component {
    constructor (props) {
        super(props);

        this.state = {}
    }

    componentDidMount () {

    }

    componentWillReceiveProps (nextProps) {

    }

    componentWillUnmount () {

    }

	handleSetValue (value) {
		let item = {};
		item[this.props.formItemKey] = value;

		this.props.setFieldsValue(item);
	}

	handleGetValue () {
		return this.props.getFieldValue(this.props.formItemKey);
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
                    initialValue: this.props.formItemInitValue
                })(
                    <Input type={'text'}
                           disabled={this.props.formItemDisabled}
                           placeholder={this.props.formItemPlaceholder}
                           onChange={this.props.formItemOnChange}
                           onPressEnter={this.props.cardFormItemOnPressEnter}/>
                )}
            </Form.Item>
        );
    }
}

NFinalInputText.propTypes = {
    formItemKey: PropTypes.string.isRequired,
    formItemTitle: PropTypes.string.isRequired,
    formItemInitValue: PropTypes.any.isRequired,
    formItemPlaceholder: PropTypes.string.isRequired,
    formIsMultiCol: PropTypes.bool.isRequired,
    formItemRequired: PropTypes.bool.isRequired,
    formItemDisabled: PropTypes.bool.isRequired,
    formItemOnChange: PropTypes.func.isRequired,
    cardFormItemOnPressEnter: PropTypes.func.isRequired,
    getFieldDecorator: PropTypes.func.isRequired,
    getFieldValue: PropTypes.func.isRequired,
    setFieldsValue: PropTypes.func.isRequired,
};

NFinalInputText.defaultProps = {};

export default NFinalInputText