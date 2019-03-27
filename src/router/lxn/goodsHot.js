import React from 'react'
import {Route} from 'react-router-dom';

import GoodsHotIndex from '../../view/lxn/goodsHot/Index';
import GoodsHotDetail from '../../view/lxn/goodsHot/Detail';

export default [
	<Route key="GoodsHotIndex" path="/goods/hot/index" component={GoodsHotIndex}/>,
	<Route key="GoodsHotAdd" path="/goods/hot/add" component={GoodsHotDetail}/>,
	<Route key="GoodsHotEditGoodsHotId" path="/goods/hot/edit/:goodsHotId" component={GoodsHotDetail}/>
]
