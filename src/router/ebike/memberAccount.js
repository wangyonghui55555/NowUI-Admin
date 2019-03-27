import React from 'react'
import {Route} from 'react-router-dom';

import MemberAccountIndex from '../../view/ebike/memberAccount/Index';
import MemberAccountDetail from '../../view/ebike/memberAccount/Detail';

export default [
	<Route key="MemberAccountIndex" path="/member/account/index" component={MemberAccountIndex}/>,
	<Route key="MemberAccountAdd" path="/member/account/add" component={MemberAccountDetail}/>,
	<Route key="MemberAccountEditMemberAccountId" path="/member/account/edit/:memberAccountId" component={MemberAccountDetail}/>
]
