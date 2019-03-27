import React from 'react'
import {Route} from 'react-router-dom';

import RiderLevelIndex from '../../view/distribution/riderLevel/Index';
import RiderLevelDetail from '../../view/distribution/riderLevel/Detail';

export default [
	<Route key="RiderLevelIndex" path="/rider/level/index" component={RiderLevelIndex}/>,
	<Route key="RiderLevelAdd" path="/rider/level/add" component={RiderLevelDetail}/>,
	<Route key="RiderLevelEditRiderLevelId" path="/rider/level/edit/:riderLevelId" component={RiderLevelDetail}/>
]
