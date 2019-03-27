import React from 'react'
import {Route} from 'react-router-dom';

import SnsMemberFollowIndex from '../../view/sns/snsMemberFollow/Index';
import SnsMemberFollowDetail from '../../view/sns/snsMemberFollow/Detail';

export default [
	<Route key="SnsMemberFollowIndex" path="/sns/member/follow/index" component={SnsMemberFollowIndex}/>,
	<Route key="SnsMemberFollowAdd" path="/sns/member/follow/add" component={SnsMemberFollowDetail}/>,
	<Route key="SnsMemberFollowEditSnsMemberFollowId" path="/sns/member/follow/edit/:snsMemberFollowId" component={SnsMemberFollowDetail}/>
]
