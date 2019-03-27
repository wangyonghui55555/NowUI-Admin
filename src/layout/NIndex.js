import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Form, Tree, Table, Card, message} from 'antd';

import NHeader from '../component/NHeader';
import NModal from '../component/NModal';
import NCol from '../component/NCol';
import NInputText from '../component/NInputText';
import NSelect from '../component/NSelect';

import constant from '../common/constant';
import http from '../common/http';


class NIndex extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoad: false,
		}
	}

	componentDidMount() {
		this.handleLoad();

		if (this.props.type === 'TREE_TABLE') {
			this.handleTreeLoad();
		}

		let value = {};

		for (let i = 0; i < this.props.searchList.length; i++) {
			value[this.props.searchList[i].id] = this.props.store[this.props.searchList[i].id];
		}

		this.props.form.setFieldsValue(value);
	}


	componentWillReceiveProps(nextProps) {

	}

	componentWillUnmount() {

	}

	handleSearch() {
		new Promise(function (resolve) {
			this.props.dispatch({
				type: this.props.id,
				data: this.props.form.getFieldsValue()
			});

			resolve();
		}.bind(this)).then(function () {
			this.handleLoad();
		}.bind(this));
	}

	handleLoad() {
		if (this.state.isLoad) {
			return;
		}

		this.setState({
			isLoad: true
		});

		let values = {
			pageIndex: this.props.store.pageIndex,
			pageSize: this.props.store.pageSize
		};

		for (let i = 0; i < this.props.searchList.length; i++) {
			values[this.props.searchList[i].id] = this.props.store[this.props.searchList[i].id];
		}

		for (let i = 0; i < this.props.listParams.length; i++) {
			values[this.props.listParams[i]] = this.props.match.params[this.props.listParams[i]];
		}

		if (this.props.type === 'TREE_TABLE') {
			values[this.props.treeKey] = this.props.store.treeSelectedKeys[0];
		}

		http.request({
			url: this.props.listUrl,
			data: values,
			success: function (data) {

				if (this.props.type === 'TABLE') {
					this.props.dispatch({
						type: this.props.id,
						data: {
							total: data.total,
							list: data.list
						}
					});
				} else if (this.props.type === 'TREE') {
					let expandedRowKeys = this.handleExpandedRowKey(data);

					this.props.dispatch({
						type: this.props.id,
						data: {
							list: data,
                            expandedRowKeys: expandedRowKeys
						}
					});
				} else if (this.props.type === 'TREE_TABLE') {
					let expandedRowKeys = this.handleExpandedRowKey(data);

					this.props.dispatch({
						type: this.props.id,
						data: {
							total: data.total,
							list: data.list,
							expandedRowKeys: expandedRowKeys
						}
					});
				}
			}.bind(this),
			error: function () {

			},
			complete: function () {
				this.setState({
					isLoad: false
				})
			}.bind(this)
		});
	}

	handleTreeLoad() {
		let values = {
			pageIndex: this.props.store.pageIndex,
			pageSize: this.props.store.pageSize
		};

		http.request({
			url: this.props.treeUrl,
			data: values,
			success: function (data) {
				this.handleTreeData(data);

				let treeExpandedRowKeys = this.handleTreeExpandedRowKey(data);

				this.props.dispatch({
					type: this.props.id,
					data: {
						treeData: data,
						treeExpandedRowKeys: treeExpandedRowKeys
					}
				});
			}.bind(this),
			error: function () {

			},
			complete: function () {

			}
		});
	}

	handleTreeData(data) {
		for (let i = 0; i < data.length; i++) {
			data[i].key = data[i][this.props.treeKey];
			data[i].value = data[i][this.props.treeValue];

			if (data[i].children) {
				this.handleTreeData(data[i].children);
			}
		}
	}

	handleExpandedRowKey(list) {
		let expandedRowKeys = [];

		for (let i = 0; i < list.length; i++) {
			if (list[i].children) {
				expandedRowKeys.push(list[i][this.props.primaryKey]);

				expandedRowKeys = expandedRowKeys.concat(this.handleExpandedRowKey(list[i].children));
			}
		}

		return expandedRowKeys;
	}

	handleTreeExpandedRowKey(list) {
		let treeExpandedRowKeys = [];

		for (let i = 0; i < list.length; i++) {
			if (list[i].children) {
				treeExpandedRowKeys.push(list[i].key);

				treeExpandedRowKeys = treeExpandedRowKeys.concat(this.handleTreeExpandedRowKey(list[i].children));
			}
		}

		return treeExpandedRowKeys;
	}

	handleChangeIndex(pageIndex) {
		new Promise(function (resolve) {
			this.props.dispatch({
				type: this.props.id,
				data: {
					pageIndex: pageIndex
				}
			});

			resolve();
		}.bind(this)).then(function () {
			this.handleLoad();
		}.bind(this));
	}

	handleChangeSize(pageIndex, pageSize) {
		new Promise(function (resolve) {
			this.props.dispatch({
				type: this.props.id,
				data: {
					pageIndex: pageIndex,
					pageSize: pageSize
				}
			});

			resolve();
		}.bind(this)).then(function () {
			this.handleLoad();
		}.bind(this));
	}

	handleAdd(addUrl) {
		this.props.history.push({
			pathname: addUrl,
			query: {}
		});
	}

	handleEdit(record, editUrl) {
		let pathname = editUrl;
		if (editUrl.indexOf('/:') > -1) {
			let index = editUrl.indexOf('/:');
			pathname = editUrl.substring(0, index + 1);
			let name = editUrl.substring(index + 2, editUrl.length);

			if (name.indexOf('/:') > -1) {
				let index2 = name.indexOf('/:');
				pathname += record[name.substring(0, index2)] + '/';
				let name2 = name.substring(index2 + 2, name.length);
				pathname += record[name2];
			} else {
				pathname += record[name];
			}
		}

		this.props.history.push({
			pathname: pathname,
			query: {}
		});
	}

	handleSynchronize(synchronizeUrl) {
		this.setState({
			isLoad: true
		});

		let values = {};
		values[this.props.primaryKey] = this.props.match.params[this.props.primaryKey];

		http.request({
			url: synchronizeUrl,
			data: values,
			success: function (data) {
                message.success(constant.success);


                this.setState({
                    isLoad: false
                }, function () {
                    this.handleLoad()
                }.bind(this));
			}.bind(this),
			complete: function () {
                this.setState({
                    isLoad: false
                });
			}.bind(this)
		});
	}

	handleTreeExpand(expandedKeys) {
		this.props.dispatch({
			type: this.props.id,
			data: {
				treeExpandedRowKeys: expandedKeys
			}
		});
	}

	handleTreeSelect(selectedKeys) {
		new Promise(function (resolve) {
			this.props.dispatch({
				type: this.props.id,
				data: {
					treeSelectedKeys: selectedKeys
				}
			});

			resolve();
		}.bind(this)).then(function () {
			this.handleLoad();
		}.bind(this));
	}

	handleRenderTreeNode = (data) => {
		return data.map((item) => {
			if (item.children) {
				return (
					<Tree.TreeNode title={item.value} key={item.key} dataRef={item}>
						{this.handleRenderTreeNode(item.children)}
					</Tree.TreeNode>
				);
			}
			return <Tree.TreeNode title={item.value} key={item.key}/>;
		});
	}

	render() {
		const {getFieldDecorator, getFieldValue, setFieldsValue} = this.props.form;
		let buttonList = [];
		for (let i = 0; i < this.props.buttonList.length; i++) {
			let button = {
				name: this.props.buttonList[i].name,
				icon: this.props.buttonList[i].icon,
				isPrimary: this.props.buttonList[i].isPrimary
			};
			switch (this.props.buttonList[i].type) {
				case 'ADD':
					button.click = this.handleAdd.bind(this, this.props.buttonList[i].addUrl);
					break;
				case 'SEARCH':
					button.click = this.handleSearch.bind(this);
					break;
               /* case 'download':
                    button.click = this.excel.bind(this);
                    break;*/
				case 'SYNCHRONIZE':
					button.click = this.handleSynchronize.bind(this, this.props.buttonList[i].synchronizeUrl);
					break;
				default:
					button.click = this.props.buttonList[i].click;
					break;
			}

			buttonList.push(button);
		}

		let columnList = [];
		for (let i = 0; i < this.props.columnList.length; i++) {
			let column = {
				title: this.props.columnList[i].name,
				key: this.props.columnList[i].id,
				dataIndex: this.props.columnList[i].id
			};

			if (this.props.columnList[i].render) {
				column.render = function (text, record, index) {
					return this.props.columnList[i].render(text, record, index, this)
				}.bind(this);
			}

			if (this.props.columnList[i].editUrl) {
				column.render = function (text, record) {
					return (
						<span>
                          <a onClick={this.handleEdit.bind(this, record, this.props.columnList[i].editUrl)}>{this.props.columnList[i].alias ? this.props.columnList[i].alias : text}</a>
                        </span>
					)
				}.bind(this)
			}

            if (this.props.columnList[i].isModal) {
                column.render = function (text, record) {
                    return (
						<span>
							{this.props.columnList[i].alias ? this.props.columnList[i].alias : text}
							<NModal name={this.props.columnList[i].btnName} title={this.props.columnList[i].alias ? this.props.columnList[i].alias : text} modalList={this.props.columnList[i].modalList}
									baseUrl={this.props.columnList[i].baseUrl} />
                        </span>
                    )
                }.bind(this)
            }

			columnList.push(column);
		}

		const pagination = {
			size: 'defalut',
			total: this.props.store.total,
			showTotal: function (total) {
				return '总共' + total + '条数据';
			},
			current: this.props.store.pageIndex,
			pageSize: this.props.store.pageSize,
			showSizeChanger: true,
			onShowSizeChange: this.handleChangeSize.bind(this),
			onChange: this.handleChangeIndex.bind(this)
		};

		let secondButtonList = [];
		for (let i = 0; i < this.props.secondButtonList.length; i++) {
			let button = {
				name: this.props.secondButtonList[i].name,
				icon: this.props.secondButtonList[i].icon
			};

			switch (this.props.secondButtonList[i].type) {
				case 'ADD':
					button.click = this.handleAdd.bind(this, this.props.secondButtonList[i].addUrl);
					break;
				case 'SEARCH':
					button.click = this.handleSearch.bind(this);
					break;
                /*case 'download':
                    button.click = this.handleSearch.bind(this);
                    break;*/
				case 'SYNCHRONIZE':
					button.click = this.handleSynchronize.bind(this, this.props.secondButtonList[i].synchronizeUrl);
					break;
				default:
					button.click = this.props.secondButtonList[i].click;
					break;
			}

			secondButtonList.push(button);
		}

		return (


			<div>

				<NHeader name={this.props.title}
						 isList={true}
						 isEdit={false}
						 breadcrumbList={this.props.breadcrumbList}
						 buttonList={buttonList}
						 secondButtonList={secondButtonList}/>
				{
					this.props.searchList.length > 0 ?
						<div className="page-search">
							<Form>
								<Row>
									{
										this.props.searchList.map(function (search) {
											return (
												<NCol key={search.id} multiLine={true}>
													{(function () {
														switch (search.type) {
															case 'VARCHAR':
																return (
																	<NInputText id={search.id}
																				label={search.name}
																				getFieldDecorator={getFieldDecorator}
																				getFieldValue={getFieldValue}
																				setFieldsValue={setFieldsValue}
																				onPressEnter={this.handleSearch.bind(this)}
																				multiLine={true}/>
																);
															case 'SELECT':
																return (
																	<NSelect id={search.id}
																			 label={search.name}
																			 staticOptionList={search.select.staticOptionList}
																			 remoteOptionConfig={search.select.remoteOptionConfig}
																			 allowClear={search.select.allowClear}
																			 showSearch={search.select.showSearch}
																			 initialValue={search.select.initialValue}
																			 getFieldDecorator={getFieldDecorator}
																			 getFieldValue={getFieldValue}
																			 setFieldsValue={setFieldsValue}
																			 labelInValue={typeof (search.labelInValue) === 'undefined' ? true : search.labelInValue}
                                                                             multiLine={true}/>
																);
															default:
																return '';
														}
													}).bind(this)()}
												</NCol>
											)
										}.bind(this))
									}
								</Row>
							</Form>
						</div>
						:
						''
				}
				<div style={{display: 'flex', flexDirection: 'row'}}>
					{
						this.props.type === 'TREE_TABLE' ?
							<div className="page-sider"
								 style={{width: '200px'}}>
								<Tree
									showLine
									expandedKeys={this.props.store.treeExpandedRowKeys}
									onExpand={this.handleTreeExpand.bind(this)}
									selectedKeys={this.props.store.treeSelectedKeys}
									onSelect={this.handleTreeSelect.bind(this)}
								>
									{this.handleRenderTreeNode(this.props.store.treeData)}
								</Tree>
							</div>
							:
							''
					}
					<div className="page-content"
						 style={{flex: 1}}>

						{(function () {
							switch (this.props.type) {
								case 'TABLE':
									return (
										<Table rowKey={this.props.primaryKey}
											   loading={this.state.isLoad}
											   columns={columnList}
											   dataSource={this.props.store.list}
											   pagination={pagination}
										/>
									);
								case 'TREE':
									return (
										<Table rowKey={this.props.primaryKey}
											   loading={this.state.isLoad}
											   columns={columnList}
											   dataSource={this.props.store.list}
										/>
									);
								case 'TREE_TABLE':
									return (
										<Table rowKey={this.props.primaryKey}
											   loading={this.state.isLoad}
											   columns={columnList}
											   dataSource={this.props.store.list}
											   pagination={pagination}
										/>
									);
								case 'CARD':
									return (
										<Row gutter={20}>
											{
												this.props.store.list.map(function (item) {
													return (
														<Col key={item[this.props.primaryKey]} xs={24} sm={6} md={6}
															 lg={4}
															 xl={4} style={{marginBottom: '20px'}}
															 onClick={this.handleEdit.bind(this, item)}>
															<Card bodyStyle={{padding: 0, cursor: 'pointer'}}>
																<div className="background-image"
																	 style={{backgroundImage: 'url(' + constant.image_host + item.file_path + ')'}}></div>
																{
																	this.props.columnList.map(function (column) {
																		return (
																			<div key={column.id}>{item[column.id]}</div>
																		)
																	})
																}
															</Card>
														</Col>
													)
												}.bind(this))
											}
										</Row>
									)
								default:
							}
						}).bind(this)()}
					</div>
				</div>
			</div>
		);
	}
}

NIndex.propTypes = {
	type: PropTypes.string,
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	primaryKey: PropTypes.string.isRequired,
	store: PropTypes.object.isRequired,
	listUrl: PropTypes.string.isRequired,
	listParams: PropTypes.array,
	treeUrl: PropTypes.string,
	treeKey: PropTypes.string,
	treeValue: PropTypes.string,
	synchronizeUrl: PropTypes.string,
	breadcrumbList: PropTypes.array.isRequired,
	buttonList: PropTypes.array.isRequired,
	secondButtonList: PropTypes.array.isRequired,
	searchList: PropTypes.array.isRequired,
	columnList: PropTypes.array.isRequired
};

NIndex.defaultProps = {
	type: 'TABLE',
	treeUrl: '',
	treeKey: '',
	treeValue: '',
	listParams: []
};

NIndex = Form.create()(NIndex);

export default NIndex;