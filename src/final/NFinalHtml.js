import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form} from 'antd';
import BraftEditor from 'braft-editor'

import notification from "../common/notification";
import constant from "../common/constant";
import NFinalImageModel from "./NFinalImageModel";

class NFinalHtml extends Component {
	constructor (props) {
		super(props);

		this.state = {

		}
	}

	componentWillReceiveProps (nextProps) {

	}

	componentDidMount () {
		notification.on('notification_media_file_' + this.props.formItemKey + '_submit', this, function (data) {
			let imageList = [];
			for (let i = 0; i < data.length; i++) {
				imageList.push({
					type: 'IMAGE',
					name: data[i].fileId,
					url: constant.imageHost + data[i].filePath
				});
			}

			this.editorInstance.insertMedias(imageList);
		});
	}

	componentWillUnmount () {
		notification.remove('notification_media_file_' + this.props.formItemKey + '_submit', this);
	}

	render () {
		const editorProps = {
			height: 500,
			disabled: this.props.formItemDisabled,
			placeholder: this.props.formItemPlaceholder,
			contentFormat: 'html',
			initialContent: '',
			controls: ['undo', 'redo', 'split', 'font-size', 'font-family', 'line-height', 'letter-spacing',
				'indent', 'text-color', 'bold', 'italic', 'underline', 'strike-through',
				'superscript', 'subscript', 'remove-styles', 'emoji', 'text-align', 'split', 'headings', 'list_ul',
				'list_ol', 'blockquote', 'code', 'split', 'link', 'split', 'hr', 'split', 'clear', 'split'],
			extendControls: [{
				type: 'button',
				html: '<span class="braft-control-text">插入图片</span>',
				onClick: () => {
					notification.emit('notification_file_list_model_' + this.props.formItemKey + '_show', {});
				}
			}, {
				type: 'split'
			}],
			indents: [0, 14, 21, 28],
			onChange: this.props.formItemOnChange
		}

		return (
			<Form.Item
				className="form-item"
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
					lg: {span: this.props.formIsMultiCol ? 16 : 20},
					xl: {span: this.props.formIsMultiCol ? 16 : 20}
				}}>
				{this.props.getFieldDecorator(this.props.formItemKey, {
					rules: [{
						required: this.props.formItemRequired,
						message: this.props.formItemTitle + '不能为空'
					}],
					initialValue: this.props.formItemInitValue
				})(
					<BraftEditor {...editorProps}
								 ref={(instance) => this.editorInstance = instance}/>
				)}
				<NFinalImageModel id={this.props.formItemKey}
								  supportUploadTypes={['image']}
								  returnLimit={0}
								  aspect={1}/>
			</Form.Item>
		);
	}
}

NFinalHtml.propTypes = {
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

NFinalHtml.defaultProps = {};

export default NFinalHtml