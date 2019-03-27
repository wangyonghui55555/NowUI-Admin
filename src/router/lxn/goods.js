import React from 'react'
import {Route} from 'react-router-dom';

import GoodsIndex from '../../view/lxn/goods/Index';
import GoodsDetail from '../../view/lxn/goods/Detail';

export default [
	<Route key="GoodsIndex" path="/goods/index" component={GoodsIndex}/>,
	<Route key="GoodsAdd" path="/goods/add" component={GoodsDetail}/>,
	<Route key="GoodsEditGoodsId" path="/goods/edit/:goodsId" component={GoodsDetail}/>
]
