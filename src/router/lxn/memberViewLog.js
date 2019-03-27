import React from 'react'
import {Route} from 'react-router-dom';

import MemberViewLogIndex from '../../view/lxn/memberViewLog/Index';
import MemberViewLogDetail from '../../view/lxn/memberViewLog/Detail';

export default [
	<Route key="MemberViewLogIndex" path="/member/view/log/index" component={MemberViewLogIndex}/>,
	<Route key="MemberViewLogAdd" path="/member/view/log/add" component={MemberViewLogDetail}/>,
	<Route key="MemberViewLogEditMemberViewLogId" path="/member/view/log/edit/:memberViewLogId" component={MemberViewLogDetail}/>
]
