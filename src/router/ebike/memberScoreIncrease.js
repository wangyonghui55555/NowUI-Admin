import React from 'react'
import {Route} from 'react-router-dom';

import MemberScoreIncreaseIndex from '../../view/ebike/memberScoreIncrease/Index';
import MemberScoreIncreaseDetail from '../../view/ebike/memberScoreIncrease/Detail';

export default [
	<Route key="MemberScoreIncreaseIndex" path="/member/score/increase/index" component={MemberScoreIncreaseIndex}/>,
	<Route key="MemberScoreIncreaseAdd" path="/member/score/increase/add" component={MemberScoreIncreaseDetail}/>,
	<Route key="MemberScoreIncreaseEditMemberScoreIncreaseId" path="/member/score/increase/edit/:memberScoreIncreaseId" component={MemberScoreIncreaseDetail}/>
]
