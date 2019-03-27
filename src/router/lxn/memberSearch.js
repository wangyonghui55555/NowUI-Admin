import React from 'react'
import {Route} from 'react-router-dom';

import MemberSearchIndex from '../../view/lxn/memberSearch/Index';
import MemberSearchDetail from '../../view/lxn/memberSearch/Detail';

export default [
	<Route key="MemberSearchIndex" path="/member/search/index" component={MemberSearchIndex}/>,
	<Route key="MemberSearchAdd" path="/member/search/add" component={MemberSearchDetail}/>,
	<Route key="MemberSearchEditMemberSearchId" path="/member/search/edit/:memberSearchId" component={MemberSearchDetail}/>
]
