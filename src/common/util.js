import FormItemType from "../emun/FormItemType";
import moment from 'moment';
import china from "./china";

function scrollToTop (number) {
	document.documentElement.scrollTop = number;
	document.body.scrollTop = number;
}

function setTitle (title) {
	document.title = title;
}

function handleEnter (next, replace, callback) {

	callback();
}

function isPc () {
	if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		return false;
	} else {
		return true
	}
}

function handleEnValue (formItemList, values) {
	for (let formItem of formItemList) {
		switch (formItem.formItemType) {
			case FormItemType.SELECT:
				for (let key in values) {
					if (key === formItem.formItemKey) {
						let value = values[key];

                        if (formItem.formLabelInValue) {
                            if (typeof (value) === 'undefined') {
                                values[formItem.selectKeyName] = '';
                                values[formItem.selectValueName] = '';
                            } else {
                                values[formItem.selectKeyName] = value.key;
                                values[formItem.selectValueName] = value.label;
                            }

                            if (key !== formItem.selectKeyName) {
                                delete values[key];
                            }
                        }
					}
				}

				break;
			case FormItemType.TREE_SELECT:
				for (let key in values) {
					if (key === formItem.formItemKey) {
						let value = values[key];

						if (formItem.formLabelInValue) {
							if (typeof (value) === 'undefined') {
								values[formItem.selectKeyName] = '';
								values[formItem.selectValueName] = '';
							} else {
								values[formItem.selectKeyName] = value.value;
								values[formItem.selectValueName] = value.label;
							}

							if (key !== formItem.selectKeyName) {
								delete values[key];
							}
						}
					}
				}

				break;
			case FormItemType.IMAGE:
				for (let key in values) {
					if (key === formItem.formItemKey) {
						let value = values[key];

						if (typeof (value) === 'undefined') {
							values[formItem.imageKeyName] = '';
							values[formItem.imageValueName] = '';
						} else {
							values[formItem.imageKeyName] = value[0].value;
							values[formItem.imageValueName] = value[0].label;
						}

						if (key !== formItem.imageKeyName) {
							delete values[key];
						}
					}
				}

				break;
			case FormItemType.CHINA:
				for (let key in values) {
					if (key === formItem.formItemKey) {
						let value = values[key];

						if (value === '') {
							delete values[key];

							values[formItem.chinaProvinceKeyName] = '';
							values[formItem.chinaProvinceValueName] = '';
							values[formItem.chinaCityKeyName] = '';
							values[formItem.chinaCityValueName] = '';
							values[formItem.chinaAreaKeyName] = '';
							values[formItem.chinaAreaValueName] = '';
						} else {
							for (let j = 0; j < china.length; j++) {
								var province = china[j];

								if (value[0] === province.value) {
									values[formItem.chinaProvinceKeyName] = province.value;
									values[formItem.chinaProvinceValueName] = province.label;

									for (let k = 0; k < province.children.length; k++) {
										let city = province.children[k];

										if (value[1] === city.value) {
											values[formItem.chinaCityKeyName] = city.value;
											values[formItem.chinaCityValueName] = city.label;

											for (let l = 0; l < city.children.length; l++) {
												let area = city.children[l];

												if (value[2] === area.value) {
													values[formItem.chinaAreaKeyName] = area.value;
													values[formItem.chinaAreaValueName] = area.label;
												}
											}
										}
									}
								}
							}
						}
					}
				}

				break;
			default:
				break;
		}
	}

	return values;
}

function handleDevalue (formItem, data) {
	let formValue = {};

	switch (formItem.formItemType) {
		case FormItemType.SELECT:
			if (typeof (data[formItem.selectKeyName]) === 'undefined' || data[formItem.selectKeyName] === '') {
				delete data[formItem.formItemKey];
				delete data[formItem.selectKeyName];
			} else {
				if (formItem.formLabelInValue) {
					formValue[formItem.formItemKey] = {
						key: data[formItem.selectKeyName],
						label: data[formItem.selectValueName]
					};
				} else {
					formValue[formItem.formItemKey] = data[formItem.formItemKey];
				}
			}

			break;
		case FormItemType.TREE_SELECT:
			if (typeof (data[formItem.selectKeyName]) === 'undefined' || data[formItem.selectKeyName] === '') {
				delete data[formItem.formItemKey];
				delete data[formItem.selectKeyName];
			} else {
				if (formItem.formLabelInValue) {
					formValue[formItem.formItemKey] = {
						value: data[formItem.selectKeyName],
						label: data[formItem.selectValueName]
					};
				} else {
					formValue[formItem.formItemKey] = data[formItem.formItemKey];
				}
			}

			break;
		case FormItemType.IMAGE:
			if (typeof (data[formItem.imageKeyName]) === 'undefined' || data[formItem.imageKeyName] === '') {
				delete data[formItem.formItemKey];
				delete data[formItem.imageKeyName];
			} else {
				formValue[formItem.formItemKey] = [{
					value: data[formItem.imageKeyName],
					label: data[formItem.imageValueName]
				}];
			}

			break;
		case FormItemType.CHINA:
			let china = [];
			let chinaProvinceKeyName = data[formItem.chinaProvinceKeyName];
			let chinaProvinceValueName = data[formItem.chinaProvinceValueName];
			let chinaCityKeyName = data[formItem.chinaCityKeyName];
			let chinaCityValueName = data[formItem.chinaCityValueName];
			let chinaAreaKeyName = data[formItem.chinaAreaKeyName];
			let chinaAreaValueName = data[formItem.chinaAreaValueName];

			if (typeof (chinaProvinceValueName) === 'undefined' || chinaProvinceValueName === '') {

			} else {
				if (chinaProvinceValueName === '') {
					for (let j = 0; j < china.length; j++) {
						var province = china[j];

						if (chinaProvinceValueName === province.label) {
							china.push(province.value);

							for (let k = 0; k < province.children.length; k++) {
								let city = province.children[k];

								if (chinaCityValueName === city.label) {
									china.push(city.value);

									for (let l = 0; l < city.children.length; l++) {
										let area = city.children[l];

										if (chinaAreaValueName === area.label) {
											china.push(area.value);
										}
									}
								}
							}
						}
					}
				} else {
					china.push(chinaProvinceKeyName);
					china.push(chinaCityKeyName);
					china.push(chinaAreaKeyName);
				}

				formValue[formItem.formItemKey] = china;
			}

			break;
		case FormItemType.DATE_PICKER:
			if (typeof (data[formItem.formItemKey]) === 'undefined' || data[formItem.formItemKey] === '') {
				delete data[formItem.formItemKey];
			} else {
				formValue[formItem.formItemKey] = moment(data[formItem.formItemKey]);
			}

			break;
		default:
			formValue[formItem.formItemKey] = data[formItem.formItemKey];

			break;
	}

	return formValue;
}

export default {
	scrollToTop: scrollToTop,
	setTitle: setTitle,
	handleEnter: handleEnter,
	isPc: isPc,
	handleEnValue: handleEnValue,
	handleDevalue: handleDevalue
};