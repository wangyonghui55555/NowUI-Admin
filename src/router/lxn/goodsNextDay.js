import React from 'react'
import {Route} from 'react-router-dom';

import GoodsNextDayIndex from '../../view/lxn/goodsNextDay/Index';
import GoodsNextDayDetail from '../../view/lxn/goodsNextDay/Detail';

export default [
	<Route key="GoodsNextDayIndex" path="/goods/next/day/index" component={GoodsNextDayIndex}/>,
	<Route key="GoodsNextDayAdd" path="/goods/next/day/add" component={GoodsNextDayDetail}/>,
	<Route key="GoodsNextDayEditGoodsNextDayId" path="/goods/next/day/edit/:goodsNextDayId" component={GoodsNextDayDetail}/>
]
