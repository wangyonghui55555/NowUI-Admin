import React from 'react'
import {Route} from 'react-router-dom';

import GoodsDetailIndex from '../../view/lxn/goodsDetail/Index';
import GoodsDetailDetail from '../../view/lxn/goodsDetail/Detail';

export default [
	<Route key="GoodsDetailIndex" path="/goods/detail/index" component={GoodsDetailIndex}/>,
	<Route key="GoodsDetailAdd" path="/goods/detail/add" component={GoodsDetailDetail}/>,
	<Route key="GoodsDetailEditGoodsDetailId" path="/goods/detail/edit/:goodsDetailId" component={GoodsDetailDetail}/>
]
