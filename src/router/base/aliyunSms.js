import React from 'react'
import {Route} from 'react-router-dom';

import AliyunSmsIndex from '../../view/base/aliyunSms/Index';
import AliyunSmsDetail from '../../view/base/aliyunSms/Detail';

export default [
	<Route key="AliyunSmsIndex" path="/aliyun/sms/index" component={AliyunSmsIndex}/>,
	<Route key="AliyunSmsAdd" path="/aliyun/sms/add" component={AliyunSmsDetail}/>,
	<Route key="AliyunSmsEditAliyunSmsId" path="/aliyun/sms/edit/:aliyunSmsId" component={AliyunSmsDetail}/>
]
