import React from 'react'
import {Route} from 'react-router-dom';

import YonghuiBusinessOrderIndex from '../../view/distribution/yonghuiBusinessOrder/Index';
import YonghuiBusinessOrderDetail from '../../view/distribution/yonghuiBusinessOrder/Detail';

export default [
	<Route key="YonghuiBusinessOrderIndex" path="/yonghui/business/order/index" component={YonghuiBusinessOrderIndex}/>,
	<Route key="YonghuiBusinessOrderAdd" path="/yonghui/business/order/add" component={YonghuiBusinessOrderDetail}/>,
	<Route key="YonghuiBusinessOrderEditYonghuiBusinessOrderId" path="/yonghui/business/order/edit/:yonghuiBusinessOrderId" component={YonghuiBusinessOrderDetail}/>
]
