import React from 'react'
import {Route} from 'react-router-dom';

import MemberPayIndex from '../../view/lxn/memberPay/Index';
import MemberPayDetail from '../../view/lxn/memberPay/Detail';

export default [
	<Route key="MemberPayIndex" path="/member/pay/index" component={MemberPayIndex}/>,
	<Route key="MemberPayAdd" path="/member/pay/add" component={MemberPayDetail}/>,
	<Route key="MemberPayEditMemberPayId" path="/member/pay/edit/:memberPayId" component={MemberPayDetail}/>
]
