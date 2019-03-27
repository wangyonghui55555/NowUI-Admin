import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, InputNumber} from 'antd';

class NSuperInputNumber extends Component {
    constructor (props) {
        super(props);

        this.state = {}
    }

    componentDidMount () {
        this.props.formItemInit(this);
    }

    componentWillReceiveProps (nextProps) {

    }

    componentWillUnmount () {

    }

    handleChange (data) {
        this.props.formItemOnChange(this, data);
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
                    <InputNumber min={this.props.formItemMin}
                                 max={this.props.formItemMax}
                                 step={this.props.formItemStep}
                                 disabled={this.props.formItemDisabled}
                                 placeholder={this.props.formItemPlaceholder}
                                 onChange={this.handleChange.bind(this)}
                                 onPressEnter={this.props.cardFormItemOnPressEnter}/>
                )}
            </Form.Item>
        );
    }
}

NSuperInputNumber.propTypes = {
    formItemKey: PropTypes.string.isRequired,
    formItemTitle: PropTypes.string.isRequired,
    formItemInitValue: PropTypes.any.isRequired,
    formItemPlaceholder: PropTypes.string.isRequired,
    formItemMin: PropTypes.number.isRequired,
    formItemMax: PropTypes.number.isRequired,
    formItemStep: PropTypes.number.isRequired,
    formIsMultiCol: PropTypes.bool.isRequired,
    formItemRequired: PropTypes.bool.isRequired,
    formItemDisabled: PropTypes.bool.isRequired,
    formItemInit: PropTypes.func.isRequired,
    formItemOnChange: PropTypes.func.isRequired,
    cardFormItemOnPressEnter: PropTypes.func.isRequired,
    getFieldDecorator: PropTypes.func.isRequired,
    getFieldValue: PropTypes.func.isRequired,
    setFieldsValue: PropTypes.func.isRequired
};

NSuperInputNumber.defaultProps = {};

export default NSuperInputNumber