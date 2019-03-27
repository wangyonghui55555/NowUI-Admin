import React from 'react'
import {Route} from 'react-router-dom';

import MemberCartIndex from '../../view/lxn/memberCart/Index';
import MemberCartDetail from '../../view/lxn/memberCart/Detail';

export default [
	<Route key="MemberCartIndex" path="/member/cart/index" component={MemberCartIndex}/>,
	<Route key="MemberCartAdd" path="/member/cart/add" component={MemberCartDetail}/>,
	<Route key="MemberCartEditMemberCartId" path="/member/cart/edit/:memberCartId" component={MemberCartDetail}/>
]
