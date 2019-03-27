import React from 'react'
import {Route} from 'react-router-dom';

import AreaPointStrategyParkingIndex from '../../view/ebike/areaPointStrategyParking/Index';
import AreaPointStrategyParkingDetail from '../../view/ebike/areaPointStrategyParking/Detail';

export default [
	<Route key="AreaPointStrategyParkingIndex" path="/area/point/strategy/parking/index" component={AreaPointStrategyParkingIndex}/>,
	<Route key="AreaPointStrategyParkingAdd" path="/area/point/strategy/parking/add" component={AreaPointStrategyParkingDetail}/>,
	<Route key="AreaPointStrategyParkingEditAreaPointStrategyParkingId" path="/area/point/strategy/parking/edit/:areaPointStrategyParkingId" component={AreaPointStrategyParkingDetail}/>
]
