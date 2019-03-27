import React from 'react'
import {Route} from 'react-router-dom';

import MemberAuthIndex from '../../view/member/memberAuth/Index';
import MemberAuthDetail from '../../view/member/memberAuth/Detail';

export default [
	<Route key="MemberAuthIndex" path="/member/auth/index" component={MemberAuthIndex}/>,
	<Route key="MemberAuthAdd" path="/member/auth/add" component={MemberAuthDetail}/>,
	<Route key="MemberAuthEditMemberAuthId" path="/member/auth/edit/:memberAuthId" component={MemberAuthDetail}/>
]
