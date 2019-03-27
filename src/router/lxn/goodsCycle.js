import React from 'react'
import {Route} from 'react-router-dom';

import GoodsCycleIndex from '../../view/lxn/goodsCycle/Index';
import GoodsCycleDetail from '../../view/lxn/goodsCycle/Detail';

export default [
	<Route key="GoodsCycleIndex" path="/goods/cycle/index" component={GoodsCycleIndex}/>,
	<Route key="GoodsCycleAdd" path="/goods/cycle/add" component={GoodsCycleDetail}/>,
	<Route key="GoodsCycleEditGoodsCycleId" path="/goods/cycle/edit/:goodsCycleId" component={GoodsCycleDetail}/>
]
