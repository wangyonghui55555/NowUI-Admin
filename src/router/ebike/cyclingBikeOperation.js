import React from 'react'
import {Route} from 'react-router-dom';

import CyclingBikeOperationIndex from '../../view/ebike/cyclingBikeOperation/Index';
import CyclingBikeOperationDetail from '../../view/ebike/cyclingBikeOperation/Detail';

export default [
	<Route key="CyclingBikeOperationIndex" path="/cycling/bike/operation/index" component={CyclingBikeOperationIndex}/>,
	<Route key="CyclingBikeOperationAdd" path="/cycling/bike/operation/add" component={CyclingBikeOperationDetail}/>,
	<Route key="CyclingBikeOperationEditCyclingBikeOperationId" path="/cycling/bike/operation/edit/:cyclingBikeOperationId" component={CyclingBikeOperationDetail}/>
]
