import React from 'react'
import {Route} from 'react-router-dom';

import OperatorsMaintenanceFaultHandleIndex from '../../view/ebike/operatorsMaintenanceFaultHandle/Index';
import OperatorsMaintenanceFaultHandleDetail from '../../view/ebike/operatorsMaintenanceFaultHandle/Detail';

export default [
	<Route key="OperatorsMaintenanceFaultHandleIndex" path="/operators/maintenance/fault/handle/index" component={OperatorsMaintenanceFaultHandleIndex}/>,
	<Route key="OperatorsMaintenanceFaultHandleAdd" path="/operators/maintenance/fault/handle/add" component={OperatorsMaintenanceFaultHandleDetail}/>,
	<Route key="OperatorsMaintenanceFaultHandleEditOperatorsMaintenanceFaultHandleId" path="/operators/maintenance/fault/handle/edit/:operatorsMaintenanceFaultHandleId" component={OperatorsMaintenanceFaultHandleDetail}/>
]
