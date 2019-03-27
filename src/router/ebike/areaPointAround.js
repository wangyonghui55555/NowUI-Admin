import React from 'react'
import {Route} from 'react-router-dom';

import AreaPointAroundIndex from '../../view/ebike/areaPointAround/Index';
import AreaPointAroundDetail from '../../view/ebike/areaPointAround/Detail';

export default [
	<Route key="AreaPointAroundIndex" path="/area/point/around/index" component={AreaPointAroundIndex}/>,
	<Route key="AreaPointAroundAdd" path="/area/point/around/add" component={AreaPointAroundDetail}/>,
	<Route key="AreaPointAroundEditAreaPointAroundId" path="/area/point/around/edit/:areaPointAroundId" component={AreaPointAroundDetail}/>
]
