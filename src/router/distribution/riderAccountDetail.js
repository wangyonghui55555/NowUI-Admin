import React from 'react'
import {Route} from 'react-router-dom';

import RiderAccountDetailIndex from '../../view/distribution/riderAccountDetail/Index';
import RiderAccountDetailDetail from '../../view/distribution/riderAccountDetail/Detail';

export default [
	<Route key="RiderAccountDetailIndex" path="/rider/account/detail/index" component={RiderAccountDetailIndex}/>,
	<Route key="RiderAccountDetailAdd" path="/rider/account/detail/add" component={RiderAccountDetailDetail}/>,
	<Route key="RiderAccountDetailView" path="/rider/account/view/:riderId" component={RiderAccountDetailDetail}/>
]
