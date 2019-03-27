import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Cascader} from 'antd';

import china from '../common/china';

class NFinalChina extends Component {
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
                    <Cascader options={china}
                              disabled={this.props.formItemDisabled}
                              placeholder={this.props.formItemPlaceholder}
                              onChange={this.props.formItemOnChange}
                              onPressEnter={this.props.cardFormItemOnPressEnter}/>
                )}
            </Form.Item>
        );
    }
}

NFinalChina.propTypes = {
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

NFinalChina.defaultProps = {};

export default NFinalChina