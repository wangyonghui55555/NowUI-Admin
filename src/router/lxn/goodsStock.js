import React from 'react'
import {Route} from 'react-router-dom';

import GoodsStockIndex from '../../view/lxn/goodsStock/Index';
import GoodsStockDetail from '../../view/lxn/goodsStock/Detail';

export default [
	<Route key="GoodsStockIndex" path="/goods/stock/index" component={GoodsStockIndex}/>,
	<Route key="GoodsStockAdd" path="/goods/stock/add" component={GoodsStockDetail}/>,
	<Route key="GoodsStockEditGoodsStockId" path="/goods/stock/edit/:goodsStockId" component={GoodsStockDetail}/>
]
