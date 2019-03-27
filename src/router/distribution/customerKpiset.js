import React from 'react'
import {Route} from 'react-router-dom';

import CustomerKpisetIndex from '../../view/distribution/customerKpiset/Index';
import CustomerKpisetDetail from '../../view/distribution/customerKpiset/Detail';

export default [
	<Route key="CustomerKpisetIndex" path="/customer/kpiset/index" component={CustomerKpisetIndex}/>,
	<Route key="CustomerKpisetAdd" path="/customer/kpiset/add" component={CustomerKpisetDetail}/>,
	<Route key="CustomerKpisetEditCustomerKpisetId" path="/customer/kpiset/edit/:kpiTypeId" component={CustomerKpisetDetail}/>
]
