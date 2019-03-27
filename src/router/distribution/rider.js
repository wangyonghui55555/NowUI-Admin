import React from 'react'
import {Route} from 'react-router-dom';

import RiderIndex from '../../view/distribution/rider/Index';
import RiderDetail from '../../view/distribution/rider/Detail';
import RiderTotalReport from '../../view/distribution/rider/RiderOrderTotalReport';

export default [
	<Route key="RiderIndex" path="/rider/index" component={RiderIndex}/>,
	<Route key="RiderAdd" path="/rider/add" component={RiderDetail}/>,
	<Route key="RiderEditRiderId" path="/rider/edit/:riderId" component={RiderDetail}/>,
    <Route key="RiderTotalReport" path="/rider/RiderOrderTotalReport" component={RiderTotalReport}/>
]
