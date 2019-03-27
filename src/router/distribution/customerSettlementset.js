import React from 'react'
import {Route} from 'react-router-dom';

import CustomerSettlementsetIndex from '../../view/distribution/customerSettlementset/Index';
import CustomerSettlementsetDetail from '../../view/distribution/customerSettlementset/Detail';

export default [
	<Route key="CustomerSettlementsetIndex" path="/customer/settlementset/index" component={CustomerSettlementsetIndex}/>,
	<Route key="CustomerSettlementsetAdd" path="/customer/settlementset/add" component={CustomerSettlementsetDetail}/>,
	<Route key="CustomerSettlementsetEditCustomerSettlementsetId" path="/customer/settlementset/edit/:customerSettlementsetId" component={CustomerSettlementsetDetail}/>
]
