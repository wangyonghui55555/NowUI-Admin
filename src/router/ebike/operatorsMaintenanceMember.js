import React from 'react'
import {Route} from 'react-router-dom';

import OperatorsMaintenanceMemberIndex from '../../view/ebike/operatorsMaintenanceMember/Index';
import OperatorsMaintenanceMemberDetail from '../../view/ebike/operatorsMaintenanceMember/Detail';

export default [
	<Route key="OperatorsMaintenanceMemberIndex" path="/operators/maintenance/member/index" component={OperatorsMaintenanceMemberIndex}/>,
	<Route key="OperatorsMaintenanceMemberAdd" path="/operators/maintenance/member/add" component={OperatorsMaintenanceMemberDetail}/>,
	<Route key="OperatorsMaintenanceMemberEditOperatorsMaintenanceMemberId" path="/operators/maintenance/member/edit/:operatorsMaintenanceMemberId" component={OperatorsMaintenanceMemberDetail}/>
]
