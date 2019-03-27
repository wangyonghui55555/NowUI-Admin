import React from 'react'
import {Route} from 'react-router-dom';

import AreaPointIndex from '../../view/ebike/areaPoint/Index';
import AreaPointDetail from '../../view/ebike/areaPoint/Detail';

export default [
	<Route key="AreaPointIndex" path="/area/point/index" component={AreaPointIndex}/>,
	<Route key="AreaPointAdd" path="/area/point/add" component={AreaPointDetail}/>,
	<Route key="AreaPointEditAreaPointId" path="/area/point/edit/:areaPointId" component={AreaPointDetail}/>
]
