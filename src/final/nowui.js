import React from 'react';
import CardType from "../emun/CardType";
import FormType from "../emun/FormType";
import http from "../common/http";
import notification from "../common/notification";
import constant from "../common/constant";
import TableType from "../emun/TableType";
import FormItemType from "../emun/FormItemType";
import {message, Modal} from "antd/lib/index";
import util from "../common/util";
import moment from "moment/moment";

function nowui (WrappedComponent) {
	return class nowui extends React.Component {
		constructor (props) {
			super(props);

			this.state = {
				isLoad: false,
				isSave: false,
				isUpdate: false,
				loadConfig: {},
				loadRequest: () => {
					return {}
				},
				loadResponse: () => {

				},
				submitConfig: '',
				submitRequest: () => {
					return {}
				},
				submitResponse: () => {

				},
				cardList: []
			}
		}

		componentDidMount () {
			//设置search表单的值
			for (let i = 0; i < this.state.cardList.length; i++) {
				let card = this.state.cardList[i];

				if (card.props.cardType === CardType.FORM && card.props.formType === FormType.SEARCH) {

					let value = {};
					for (let j = 0; j < card.props.formItemList.length; j++) {
						let formItem = card.props.formItemList[j];

						value = Object.assign({}, value, util.handleDevalue(formItem, this.props.store));
					}

					card.ref.props.form.setFieldsValue(value);
				}
			}
		}

		componentWillReceiveProps (nextProps) {

		}

		componentWillUnmount () {

		}

		handleActiveMenu (url) {

		}

		handleSetState (state) {
			this.setState(state);
		}

		handleRegister (card) {
			let cardList = this.state.cardList;

			cardList.push(card);

			this.setState({
				cardList: cardList
			});
		}

		handleInitLoad (loadConfig, loadRequest, loadResponse) {
			this.setState({
				loadConfig: loadConfig,
				loadRequest: loadRequest,
				loadResponse: loadResponse
			}, () => {
				this.handleLoad();
			});
		}

		handleInitSubmit (submitConfig, submitRequest, submitResponse) {
			this.setState({
				submitConfig: submitConfig,
				submitRequest: submitRequest,
				submitResponse: submitResponse
			});
		}

		handleSearch () {
			if (this.state.isLoad) {
				return;
			}

			//保存搜索表单的请求参数到本地
			let data = {};
			let errorList = [];
			let valueList = [];
			for (let i = 0; i < this.state.cardList.length; i++) {
				let card = this.state.cardList[i];

				if (card.props.cardType === CardType.FORM && card.props.formType === FormType.SEARCH) {
					this.state.cardList[i].ref.props.form.validateFieldsAndScroll((errors, values) => {
						if (!!errors) {
							errorList.push(true);

							return;
						}

						values = util.handleEnValue(this.state.cardList[i].props.formItemList, values);

						valueList.push(values);
					});
				}
			}

			for (let i = 0; i < valueList.length; i++) {
				data = Object.assign({}, data, valueList[i]);
			}

			if (JSON.stringify(data) === '{}') {
				this.handleLoad();
			} else {
				new Promise(function (resolve) {
					this.props.dispatch({
						type: this.props.storeKey,
						data: data
					});

					resolve();
				}.bind(this)).then(function () {
					this.handleLoad();
				}.bind(this));
			}
		}

		handleLoad () {
			if (this.state.isLoad) {
				return;
			}

			if (!!this.state.loadConfig.isLoad) {
				this.setState({
					isLoad: true
				});
			}

			let loadValue = {};

			//添加自定义参数
			loadValue = Object.assign({}, loadValue, this.state.loadRequest());

			//添加搜索表单参数
			for (let i = 0; i < this.state.cardList.length; i++) {
				let card = this.state.cardList[i];

				if (card.props.cardType === CardType.FORM && card.props.formType === FormType.SEARCH) {
					for (let j = 0; j < card.props.formItemList.length; j++) {
						let formItem = card.props.formItemList[j];

						switch (formItem.formItemType) {
							case FormItemType.SELECT:
                                if (formItem.labelInValue) {
                                    loadValue[formItem.selectKeyName] = this.props.store[formItem.selectKeyName];
                                    loadValue[formItem.selectValueName] = this.props.store[formItem.selectValueName];
                                } else {
									// loadValue[formItem.formItemKey] = this.props.store[formItem.formItemKey];
									loadValue[formItem.selectKeyName] = this.props.store[formItem.selectKeyName];
                                }

								break;
							case FormItemType.TREE_SELECT:
								if (formItem.labelInValue) {
									loadValue[formItem.selectKeyName] = this.props.store[formItem.selectKeyName];
									loadValue[formItem.selectValueName] = this.props.store[formItem.selectValueName];
								} else {
									// loadValue[formItem.formItemKey] = this.props.store[formItem.formItemKey];
									loadValue[formItem.selectKeyName] = this.props.store[formItem.selectKeyName];
								}

								break;
							case FormItemType.IMAGE:
								loadValue[formItem.imageKeyName] = this.props.store[formItem.imageKeyName];
								loadValue[formItem.imageValueName] = this.props.store[formItem.imageValueName];

								break;
							case FormItemType.CHINA:
								loadValue[formItem.chinaProvinceKeyName] = this.props.store[formItem.chinaProvinceKeyName];
								loadValue[formItem.chinaProvinceValueName] = this.props.store[formItem.chinaProvinceValueName];
								loadValue[formItem.chinaCityKeyName] = this.props.store[formItem.chinaCityKeyName];
								loadValue[formItem.chinaCityValueName] = this.props.store[formItem.chinaCityValueName];
								loadValue[formItem.chinaAreaKeyName] = this.props.store[formItem.chinaAreaKeyName];
								loadValue[formItem.chinaAreaValueName] = this.props.store[formItem.chinaAreaValueName];

								break;
                            case FormItemType.DATE_PICKER:
                                loadValue[formItem.formItemKey] = this.props.store[formItem.formItemKey] ? moment(this.props.store[formItem.formItemKey]).format("YYYY-MM-DD HH:mm:ss") : '';

                                break;
							default:
								loadValue[formItem.formItemKey] = this.props.store[formItem.formItemKey];

								break;
						}
					}
				}
			}

			//添加左边树形右边列表条件参数
			for (let i = 0; i < this.state.cardList.length; i++) {
				let card = this.state.cardList[i];

				if (card.props.cardType === CardType.TREE_TABLE) {

				}
			}

			http.request({
				url: this.state.loadConfig.url,
				data: loadValue,
				success: function (data) {
					//存储自定义数据
					this.state.loadResponse(data);

					//存储form
					for (let i = 0; i < this.state.cardList.length; i++) {
						let card = this.state.cardList[i];

						if (card.props.cardType === CardType.FORM && card.props.formType === FormType.SUBMIT) {
							//取出每个form表单的数据
							let formValue = {};
							for (let j = 0; j < card.props.formItemList.length; j++) {
								let formItem = card.props.formItemList[j];

								formValue = Object.assign({}, formValue, util.handleDevalue(formItem, data));

								if (formItem.formItemType === FormItemType.HTML) {
									card.ref.refs[formItem.formItemKey].editorInstance.setContent(data[formItem.formItemKey], 'html');
								}
							}

							card.ref.props.form.setFieldsValue(formValue);
						} else if (card.props.cardType === CardType.TABLE && card.props.tableType === TableType.SUBMIT) {
							if (typeof (data[this.state.cardList[i].props.tableFormItemKey]) !== 'undefined') {
								this.state.cardList[i].refs.table.setState({
									list: data[this.state.cardList[i].props.tableFormItemKey]
								});
							}
						}
					}
				}.bind(this),
				error: function () {

				},
				complete: function () {
					if (!!this.state.loadConfig.isLoad) {
						this.setState({
							isLoad: false
						});
					}
				}.bind(this)
			});
		}

		handleSubmit () {
			if (this.state.isLoad) {
				return;
			}

			let submitValue = {};

			//获取form表单的值
			let errorList = [];
			let valueList = [];
			for (let i = 0; i < this.state.cardList.length; i++) {
				let card = this.state.cardList[i];

				if (card.props.cardType === CardType.FORM && card.props.formType === FormType.SUBMIT) {
					this.state.cardList[i].ref.props.form.validateFieldsAndScroll((errors, values) => {
						if (!!errors) {
							errorList.push(true);

							return;
						}

						values = util.handleEnValue(this.state.cardList[i].props.formItemList, values);

						valueList.push(values);
					});
				} else if (card.props.cardType === CardType.TABLE && card.props.tableType === TableType.SUBMIT) {
					let value = {};
					let list = this.state.cardList[i].refs.table.state.list;

					if (list.length === 0 && card.props.cardIsRequired) {
						errorList.push(true);

                        message.error(this.state.cardList[i].props.cardTitle + '不能为空');

                        return;
					}

					value[this.state.cardList[i].props.tableFormItemKey] = JSON.stringify(list);
					valueList.push(value);
				}
			}

			if (errorList.length > 0) {
				return;
			}

			for (let i = 0; i < valueList.length; i++) {
				submitValue = Object.assign({}, submitValue, valueList[i]);
			}

			submitValue = Object.assign({}, submitValue, this.state.submitRequest(submitValue));

			this.setState({
				isLoad: true
			});

			http.request({
				url: this.state.submitConfig.url,
				data: submitValue,
				success: function (data) {
					message.success(constant.success);

					this.state.submitResponse(data);
				}.bind(this),
				complete: function () {
					this.setState({
						isLoad: false
					});
				}.bind(this)
			});
		}

		handleBack () {
			this.props.history.goBack();
		}

		handleReset () {
			for (let i = 0; i < this.contentList.length; i++) {
				let content = this.contentList[i];

				if (content.cardType === CardType.FORM && content.formType === FormType.SUBMIT) {
					content.ref.props.form.resetFields();
				}
			}
		}

		handleRequest (config, request, response) {
			if (this.state.isLoad) {
				return;
			}

			if (!!config.isConfirm) {
				Modal.confirm({
					title: '温馨提示',
					content: config.confirmContent,
					okText: '确定',
					okType: 'danger',
					cancelText: '取消',
					onOk: function () {
						this.handleHttpRequest(config, request, response);
					}.bind(this),
					onCancel () {

					},
				});
			} else {
				this.handleHttpRequest(config, request, response);
			}
		}

		handleHttpRequest (config, request, response) {
			if (!!config.isLoad) {
				this.setState({
					isLoad: true
				});
			}

			let value = request();

			http.request({
				url: config.url,
				data: value,
				success: function (data) {
					response(data);
				},
				complete: function () {
					if (!!config.isLoad) {
						this.setState({
							isLoad: false
						});
					}
				}.bind(this)
			});
		}

		handlePush (url) {
			this.props.history.push({
				pathname: url,
				query: {}
			});
		}

		handleNotification (name, data) {
			notification.emit(name, data);
		}

		render () {
			let props = {
				...this.props,
				state: this.state,
				handleActiveMenu: this.handleActiveMenu.bind(this),
				handleSetState: this.handleSetState.bind(this),
				handleRegister: this.handleRegister.bind(this),
				handleInitLoad: this.handleInitLoad.bind(this),
				handleInitSubmit: this.handleInitSubmit.bind(this),
				handleSearch: this.handleSearch.bind(this),
				handleLoad: this.handleLoad.bind(this),
				handleSubmit: this.handleSubmit.bind(this),
				handleBack: this.handleBack.bind(this),
				handleReset: this.handleReset.bind(this),
				handleRequest: this.handleRequest.bind(this),
				handlePush: this.handlePush.bind(this),
				handleNotification: this.handleNotification.bind(this)
			};

			return <WrappedComponent {...props} />
		}
	}
}

export default nowui;