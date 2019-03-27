import React from 'react'
import {Route} from 'react-router-dom';

import MemberWechatIndex from '../../view/lxn/memberWechat/Index';
import MemberWechatDetail from '../../view/lxn/memberWechat/Detail';

export default [
	<Route key="MemberWechatIndex" path="/member/wechat/index" component={MemberWechatIndex}/>,
	<Route key="MemberWechatAdd" path="/member/wechat/add" component={MemberWechatDetail}/>,
	<Route key="MemberWechatEditMemberWechatId" path="/member/wechat/edit/:memberWechatId" component={MemberWechatDetail}/>
]
