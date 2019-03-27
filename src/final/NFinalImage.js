import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Form} from 'antd';

import NFinalImageModel from './NFinalImageModel';

import constant from '../common/constant';
import notification from '../common/notification';

class Image extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            isPreview: false,
            image: '',
            list: []
        };
    }

    componentWillReceiveProps (nextProps) {
        if ('value' in nextProps) {
            if (nextProps.value) {
                this.setState({
                    list: nextProps.value
                });
            }
        }
    }

    componentDidMount () {
        notification.on('notification_media_file_' + this.props.id + '_submit', this, function (data) {
            let list = this.state.list;

            for (let i = 0; i < data.length; i++) {
                let isNotExit = true;

                for (let k = 0; k < this.state.list.length; k++) {
                    if (data[i].fileId === this.state.list[k].fileId) {
                        isNotExit = false;

                        break;
                    }
                }

                if (isNotExit) {
                    if (list.length < this.props.imageLimit || this.props.imageLimit === 0) {
                        let item = {};

                        item.value = data[i].fileId;
                        item.label = data[i].filePath;

                        list.push(item);
                    }
                }
            }

            const onChange = this.props.onChange;
            if (onChange) {
                let array = [];
                for (let i = 0; i < list.length; i++) {
                    array.push({
                        value: list[i].value,
                        label: list[i].label
                    })
                }
                onChange(array);
            }
        });
    }

    componentWillUnmount () {
        notification.remove('notification_media_file_' + this.props.id + '_submit', this);
    }

    handleCancel () {
        this.setState({
            isPreview: false
        });
    }

    handlePreview (value) {
        let label = '';
        for (let i = 0; i < this.state.list.length; i++) {
            if (this.state.list[i].value === value) {
                label = this.state.list[i].label;
            }
        }

        this.setState({
            image: constant.imageHost + label,
            isPreview: true
        });
    }

    handleDelete (value) {
        let index = -1;
        let list = this.state.list;

        for (let i = 0; i < list.length; i++) {
            if (list[i].value === value) {
                index = i;
            }
        }

        list.splice(index, 1);

        this.setState({
            list: list
        });

        const onChange = this.props.onChange;
        if (onChange) {
            let array = [];
            for (let i = 0; i < list.length; i++) {
                array.push({
                    value: list[i].value,
                    label: list[i].label
                })
            }
            onChange(array);
        }
    }

    handleAdd () {
        notification.emit('notification_file_list_model_' + this.props.id + '_show', {});
    }

    handleMouseOver (value) {
        let list = [];

        for (let i = 0; i < this.state.list.length; i++) {
            let item = this.state.list[i];

            list.push({
                value: item.value,
                label: item.label,
                status: item.value === value
            });
        }

        this.setState({
            list: list
        });
    }

    handleMouseOut (value) {
        let list = [];

        for (let i = 0; i < this.state.list.length; i++) {
            let item = this.state.list[i];

            list.push({
                value: item.value,
                label: item.label,
                status: false
            });
        }

        this.setState({
            list: list
        });
    }

    handleReset () {
        this.setState({
            isPreview: false,
            image: '',
            list: []
        });
    }

    render () {
        return (
            <div>
                {
                    this.state.list.map(function (item, index) {
                        const mask = item.status ? "item-mask item-mask-active" : "item-mask";
                        return (
                            <div key={index} className="item">
                                <div className="item-image"
                                     style={{backgroundImage: 'url(' + constant.imageHost + item.label + ')'}}></div>
                                <div onMouseOver={this.handleMouseOver.bind(this, item.value)}
                                     onMouseOut={this.handleMouseOut.bind(this)}>
                                    <div className={mask}></div>
                                    <i className="anticon anticon-eye-o item-preview-icon"
                                       style={{display: item.status ? 'inline' : 'none'}}
                                       onClick={this.handlePreview.bind(this, item.value)}/>
                                    <i className="anticon anticon-delete item-remove-icon"
                                       style={{display: item.status ? 'inline' : 'none'}}
                                       onClick={this.handleDelete.bind(this, item.value)}/>
                                </div>
                            </div>
                        )
                    }.bind(this))
                }
                {
                    this.state.list.length < this.props.imageLimit ?
                        <div className="media-button" onClick={this.handleAdd.bind(this)}>
                            <i className="anticon anticon-plus button-icon"/>
                            <div className="ant-upload-text button-text">添加</div>
                        </div>
                        :
                        ''
                }
                {
                    this.props.imageLimit === 0 ?
                        <div className="media-button" onClick={this.handleAdd.bind(this)}>
                            <i className="anticon anticon-plus button-icon"/>
                            <div className="ant-upload-text button-text">添加</div>
                        </div>
                        :
                        ''
                }
                <Modal visible={this.state.isPreview}
                       width={document.documentElement.clientWidth - 200}
                       footer={null}
                       onCancel={this.handleCancel.bind(this)}>
                    <div className="item-image"
                         style={{
                             height: document.documentElement.clientHeight - 55 - 53 - 290 + 'px',
                             backgroundImage: 'url(' + this.state.image + ')'
                         }}></div>
                </Modal>
            </div>
        );
    }
}

Image.propTypes = {
    id: PropTypes.string.isRequired,
    imageLimit: PropTypes.number,
    label: PropTypes.string
};

Image.defaultProps = {
    imageLimit: 0,
    label: ''
};

class NFinalImage extends Component {
    constructor (props) {
        super(props);

        this.state = {}
    }

    // handleSetFieldValue (list) {
    //     this.props.setFieldsValue({
    //         [this.props.formItemKey]: list
    //     })
    // }

    handleValidator (rule, value, callback) {
        if (!this.props.formItemRequired) {
            callback();
            return;
        }

        if (this.props.getFieldValue(this.props.formItemKey)) {
            if (this.props.getFieldValue(this.props.formItemKey).length > 0 || !this.props.formItemRequired) {
                callback();
                return;
            }
        }

        callback('请选择' + this.props.formItemTitle);
    }

    render () {
        return (
            <Form.Item className="form-item"
                       hasFeedback={false}
                       label={this.props.formItemTitle}
                       labelCol={{
                           xs: {span: 24},
                           sm: {span: 4},
                           md: {span: 4},
                           lg: {span: 4},
                           xl: {span: 4}
                       }}
                       wrapperCol={{
                           xs: {span: 24},
                           sm: {span: 17},
                           md: {span: 17},
                           lg: {span: 18},
                           xl: {span: 18}
                       }}>
                {this.props.getFieldDecorator(this.props.formItemKey, {
                    rules: [{
                        required: this.props.formItemRequired,
                        message: this.props.formItemTitle + '不能为空',
                        validator: this.handleValidator.bind(this),
                        type: 'array'
                    }]
                })(
                    <Image id={this.props.formItemKey}
                           label={this.props.formItemTitle}
                           imageLimit={this.props.imageLimit}/>
                )}
                <NFinalImageModel id={this.props.formItemKey}
                                  supportUploadTypes={['image']}
                                  returnLimit={this.props.imageLimit}
                                  aspect={1}
                                  ref="file"/>
            </Form.Item>
        );
    }
}

NFinalImage.propTypes = {
    formItemKey: PropTypes.string.isRequired,
    formItemTitle: PropTypes.string.isRequired,
    formItemInitValue: PropTypes.any.isRequired,
    formItemPlaceholder: PropTypes.string.isRequired,
    formIsMultiCol: PropTypes.bool.isRequired,
    formItemRequired: PropTypes.bool.isRequired,
    formItemDisabled: PropTypes.bool.isRequired,
    formItemOnChange: PropTypes.func.isRequired,
    imageLimit: PropTypes.number.isRequired,
    imageKeyName: PropTypes.string.isRequired,
    imageValueName: PropTypes.string.isRequired,
    cardFormItemOnPressEnter: PropTypes.func.isRequired,
    getFieldDecorator: PropTypes.func.isRequired,
    getFieldValue: PropTypes.func.isRequired,
    setFieldsValue: PropTypes.func.isRequired,
};

NFinalImage.defaultProps = {};

export default NFinalImage;
