import React from 'react'
import {Route} from 'react-router-dom';

import ReservoirAreaIndex from '../../view/lxn/reservoirArea/Index';
import ReservoirAreaDetail from '../../view/lxn/reservoirArea/Detail';

export default [
	<Route key="ReservoirAreaIndex" path="/reservoir/area/index" component={ReservoirAreaIndex}/>,
	<Route key="ReservoirAreaAdd" path="/reservoir/area/add" component={ReservoirAreaDetail}/>,
	<Route key="ReservoirAreaEditReservoirAreaId" path="/reservoir/area/edit/:reservoirAreaId" component={ReservoirAreaDetail}/>
]
