import React from 'react'
import {Route} from 'react-router-dom';

import AreaIndex from '../../view/ebike/area/Index';
import AreaDetail from '../../view/ebike/area/Detail';

export default [
	<Route key="AreaIndex" path="/area/index" component={AreaIndex}/>,
	<Route key="AreaAdd" path="/area/add" component={AreaDetail}/>,
	<Route key="AreaEditAreaId" path="/area/edit/:areaId" component={AreaDetail}/>
]
