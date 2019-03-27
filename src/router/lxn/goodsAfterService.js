import React from 'react'
import {Route} from 'react-router-dom';

import GoodsAfterServiceIndex from '../../view/lxn/goodsAfterService/Index';
import GoodsAfterServiceDetail from '../../view/lxn/goodsAfterService/Detail';

export default [
	<Route key="GoodsAfterServiceIndex" path="/goods/after/service/index" component={GoodsAfterServiceIndex}/>,
	<Route key="GoodsAfterServiceAdd" path="/goods/after/service/add" component={GoodsAfterServiceDetail}/>,
	<Route key="GoodsAfterServiceEditGoodsAfterServiceId" path="/goods/after/service/edit/:goodsAfterServiceId" component={GoodsAfterServiceDetail}/>
]
