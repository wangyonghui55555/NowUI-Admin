import React from 'react'
import {Route} from 'react-router-dom';

import CustomerKpiMapIndex from '../../view/distribution/customerKpiMap/Index';
import CustomerKpiMapDetail from '../../view/distribution/customerKpiMap/Detail';

export default [
	<Route key="CustomerKpiMapIndex" path="/customer/kpi/map/index" component={CustomerKpiMapIndex}/>,
	<Route key="CustomerKpiMapAdd" path="/customer/kpi/map/add" component={CustomerKpiMapDetail}/>,
	<Route key="CustomerKpiMapEditCustomerKpiMapId" path="/customer/kpi/map/edit/:customerKpiMapId" component={CustomerKpiMapDetail}/>
]
