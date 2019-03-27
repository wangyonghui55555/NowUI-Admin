import React from 'react'
import {Route} from 'react-router-dom';

import GoodsDeliveryIndex from '../../view/lxn/goodsDelivery/Index';
import GoodsDeliveryDetail from '../../view/lxn/goodsDelivery/Detail';

export default [
	<Route key="GoodsDeliveryIndex" path="/goods/delivery/index" component={GoodsDeliveryIndex}/>,
	<Route key="GoodsDeliveryAdd" path="/goods/delivery/add" component={GoodsDeliveryDetail}/>,
	<Route key="GoodsDeliveryEditGoodsDeliveryId" path="/goods/delivery/edit/:goodsDeliveryId" component={GoodsDeliveryDetail}/>
]
