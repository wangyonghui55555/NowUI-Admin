import React from 'react'
import {Route} from 'react-router-dom';

import AreaPointStrategyPriceIndex from '../../view/ebike/areaPointStrategyPrice/Index';
import AreaPointStrategyPriceDetail from '../../view/ebike/areaPointStrategyPrice/Detail';

export default [
	<Route key="AreaPointStrategyPriceIndex" path="/area/point/strategy/price/index" component={AreaPointStrategyPriceIndex}/>,
	<Route key="AreaPointStrategyPriceAdd" path="/area/point/strategy/price/add" component={AreaPointStrategyPriceDetail}/>,
	<Route key="AreaPointStrategyPriceEditAreaPointStrategyPriceId" path="/area/point/strategy/price/edit/:areaPointStrategyPriceId" component={AreaPointStrategyPriceDetail}/>
]
