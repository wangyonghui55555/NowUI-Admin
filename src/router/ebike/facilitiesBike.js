import React from 'react'
import {Route} from 'react-router-dom';

import FacilitiesBikeIndex from '../../view/ebike/facilitiesBike/Index';
import FacilitiesBikeDetail from '../../view/ebike/facilitiesBike/Detail';

export default [
	<Route key="FacilitiesBikeIndex" path="/facilities/bike/index" component={FacilitiesBikeIndex}/>,
	<Route key="FacilitiesBikeAdd" path="/facilities/bike/add" component={FacilitiesBikeDetail}/>,
	<Route key="FacilitiesBikeEditFacilitiesBikeId" path="/facilities/bike/edit/:facilitiesBikeId" component={FacilitiesBikeDetail}/>
]
