import React from 'react'
import {Route} from 'react-router-dom';

import OperatorsMaintenanceFaultIndex from '../../view/ebike/operatorsMaintenanceFault/Index';
import OperatorsMaintenanceFaultDetail from '../../view/ebike/operatorsMaintenanceFault/Detail';

export default [
	<Route key="OperatorsMaintenanceFaultIndex" path="/operators/maintenance/fault/index" component={OperatorsMaintenanceFaultIndex}/>,
	<Route key="OperatorsMaintenanceFaultAdd" path="/operators/maintenance/fault/add" component={OperatorsMaintenanceFaultDetail}/>,
	<Route key="OperatorsMaintenanceFaultEditOperatorsMaintenanceFaultId" path="/operators/maintenance/fault/edit/:operatorsMaintenanceFaultId" component={OperatorsMaintenanceFaultDetail}/>
]
