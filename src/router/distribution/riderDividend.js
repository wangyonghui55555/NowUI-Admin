import React from 'react'
import {Route} from 'react-router-dom';

import RiderDividendIndex from '../../view/distribution/riderDividend/Index';
import RiderDividendDetail from '../../view/distribution/riderDividend/Detail';

export default [
	<Route key="RiderDividendIndex" path="/rider/dividend/index" component={RiderDividendIndex}/>,
	<Route key="RiderDividendAdd" path="/rider/dividend/add" component={RiderDividendDetail}/>,
	<Route key="RiderDividendEditRiderDividendId" path="/rider/dividend/edit/:riderDividendId" component={RiderDividendDetail}/>
]
