import React from 'react'
import {Route} from 'react-router-dom';

import MemberIndex from '../../view/ebike/member/Index';
import MemberDetail from '../../view/ebike/member/Detail';

export default [
	<Route key="MemberIndex" path="/member/index" component={MemberIndex}/>,
	<Route key="MemberAdd" path="/member/add" component={MemberDetail}/>,
	<Route key="MemberEditMemberId" path="/member/edit/:memberId" component={MemberDetail}/>
]
