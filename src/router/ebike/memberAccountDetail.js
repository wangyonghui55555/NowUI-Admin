import React from 'react'
import {Route} from 'react-router-dom';

import MemberAccountDetailIndex from '../../view/ebike/memberAccountDetail/Index';
import MemberAccountDetailDetail from '../../view/ebike/memberAccountDetail/Detail';

export default [
	<Route key="MemberAccountDetailIndex" path="/member/account/detail/index" component={MemberAccountDetailIndex}/>,
	<Route key="MemberAccountDetailAdd" path="/member/account/detail/add" component={MemberAccountDetailDetail}/>,
	<Route key="MemberAccountDetailEditMemberAccountDetailId" path="/member/account/detail/edit/:memberAccountDetailId" component={MemberAccountDetailDetail}/>
]
