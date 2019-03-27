import React from 'react'
import {Route} from 'react-router-dom';

import MemberBackgroundIndex from '../../view/member/memberBackground/Index';
import MemberBackgroundDetail from '../../view/member/memberBackground/Detail';

export default [
	<Route key="MemberBackgroundIndex" path="/member/background/index" component={MemberBackgroundIndex}/>,
	<Route key="MemberBackgroundAdd" path="/member/background/add" component={MemberBackgroundDetail}/>,
	<Route key="MemberBackgroundEditMemberBackgroundId" path="/member/background/edit/:memberBackgroundId" component={MemberBackgroundDetail}/>
]
