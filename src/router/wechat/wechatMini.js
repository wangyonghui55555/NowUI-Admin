import React from 'react'
import {Route} from 'react-router-dom';

import WechatMiniIndex from '../../view/wechat/wechatMini/Index';
import WechatMiniDetail from '../../view/wechat/wechatMini/Detail';

export default [
	<Route key="WechatMiniIndex" path="/wechat/mini/index" component={WechatMiniIndex}/>,
	<Route key="WechatMiniAdd" path="/wechat/mini/add" component={WechatMiniDetail}/>,
	<Route key="WechatMiniEditWechatMiniId" path="/wechat/mini/edit/:wechatMiniId" component={WechatMiniDetail}/>
]
