import React from 'react'
import {Route} from 'react-router-dom';

import MemberTagIndex from '../../view/member/memberTag/Index';
import MemberTagDetail from '../../view/member/memberTag/Detail';

export default [
	<Route key="MemberTagIndex" path="/member/tag/index" component={MemberTagIndex}/>,
	<Route key="MemberTagAdd" path="/member/tag/add" component={MemberTagDetail}/>,
	<Route key="MemberTagEditMemberTagId" path="/member/tag/edit/:memberTagId" component={MemberTagDetail}/>
]
