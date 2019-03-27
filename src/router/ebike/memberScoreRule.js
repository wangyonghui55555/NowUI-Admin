import React from 'react'
import {Route} from 'react-router-dom';

import MemberScoreRuleIndex from '../../view/ebike/memberScoreRule/Index';
import MemberScoreRuleDetail from '../../view/ebike/memberScoreRule/Detail';

export default [
	<Route key="MemberScoreRuleIndex" path="/member/score/rule/index" component={MemberScoreRuleIndex}/>,
	<Route key="MemberScoreRuleAdd" path="/member/score/rule/add" component={MemberScoreRuleDetail}/>,
	<Route key="MemberScoreRuleEditMemberScoreRuleId" path="/member/score/rule/edit/:memberScoreRuleId" component={MemberScoreRuleDetail}/>
]
