import React from 'react'
import {Route} from 'react-router-dom';

import GoodsNavigationIndex from '../../view/lxn/goodsNavigation/Index';
import GoodsNavigationDetail from '../../view/lxn/goodsNavigation/Detail';

export default [
	<Route key="GoodsNavigationIndex" path="/goods/navigation/index" component={GoodsNavigationIndex}/>,
	<Route key="GoodsNavigationAdd" path="/goods/navigation/add" component={GoodsNavigationDetail}/>,
	<Route key="GoodsNavigationEditGoodsNavigationId" path="/goods/navigation/edit/:goodsNavigationId" component={GoodsNavigationDetail}/>
]
