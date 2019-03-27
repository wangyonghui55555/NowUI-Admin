import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, TreeSelect} from 'antd';

import http from '../common/http';

class NTreeSelect extends Component {
	constructor(props) {
		super(props);

		this.state = {
			treeDataList: []
		}
	}

	componentDidMount() {
		let {url, params, key, value} = this.props.remoteOptionConfig;
		if (url) {
			this.handleLoadTreeDataList(url, params, key, value);
		}

		const onChange = this.props.onChange;
		if (onChange) {
			// let array = [];
			// for (let i = 0; i < value.length; i++) {
			//     value[i].push({
			//         fileId: array[i].value,
			//         filePath: array[i].label
			//     })
			// }

			// onChange([{
			//     aaa: '123'
			// }]);
		}
	}

	componentWillReceiveProps(nextProps) {

	}

	componentWillUnmount() {

	}

	handleLoadTreeDataList(url, params, key, value) {
		http.request({
			url: url,
			data: params,
			success: function (data) {
                let treeDataList = this.handleTreeDataList(data, key, value);

                this.setState({
                    treeDataList: treeDataList
                })
			}.bind(this),
			error: function () {

			},
			complete: function () {

			}
		});
	}

	handleTreeDataList(treeDataList, key, value) {
		let newTreeDataList = [];
		if (treeDataList && treeDataList.length > 0) {
			for (let i = 0; i < treeDataList.length; i++) {
				let treeData = treeDataList[i];
				let childrenTreeData = this.handleTreeDataList(treeDataList[i].children, key, value);
				newTreeDataList.push({
					label: treeData[value],
					key: treeData[key],
					value: treeData[key],
					children: childrenTreeData
				})
			}
		}
		return newTreeDataList;
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
						message: this.props.message === '' ? (this.props.label === '' ? this.props.placeholder : '选择' + this.props.label) : ''
					}],
					initialValue: this.props.initialValue
				})(
					<TreeSelect
						allowClear={this.props.allowClear}
						labelInValue={this.props.labelInValue}
						showSearch={this.props.showSearch}
						size={this.props.size}
						multiple={this.props.multiple}
						treeCheckable={this.props.treeCheckable}
						filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
						treeNodeFilterProp={'title'}
						showCheckedStrategy={this.props.showCheckedStrategy}
						dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
						treeData={this.state.treeDataList}
						placeholder={this.props.placeholder === '' ? ('请选择' + this.props.label) : this.props.placeholder}
						treeDefaultExpandAll={this.props.treeDefaultExpandAll}/>
				)}
			</Form.Item>
		);
	}
}

NTreeSelect.propTypes = {
	getFieldDecorator: PropTypes.func.isRequired,
	getFieldValue: PropTypes.func.isRequired,
	setFieldsValue: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	labelInValue: PropTypes.bool,
	message: PropTypes.string,
	size: PropTypes.string,
	multiLine: PropTypes.bool,
	remoteOptionConfig: PropTypes.object.isRequired,
	dispatch: PropTypes.func,
	allowClear: PropTypes.bool,
	showCheckedStrategy: PropTypes.oneOf([TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD]),
	showSearch: PropTypes.bool,
	treeDefaultExpandAll: PropTypes.bool,
	treeCheckable: PropTypes.bool,
	multiple: PropTypes.bool,
	// initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
	initialValue: PropTypes.array,
	returnKey: PropTypes.string.isRequired,
	returnValue: PropTypes.string.isRequired,
	returnObject: PropTypes.object
};

NTreeSelect.defaultProps = {
	label: '',
	placeholder: '',
	required: false,
	labelInValue: true,
	message: '',
	size: 'default',
	multiLine: false,
	allowClear: false,
	showSearch: false,
	treeDefaultExpandAll: true,
	multiple: false,
	treeCheckable: false,
	returnKey: '',
	returnValue: '',
	returnObject: {}

};

export default NTreeSelect