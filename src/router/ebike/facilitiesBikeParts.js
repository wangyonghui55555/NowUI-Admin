import React from 'react'
import {Route} from 'react-router-dom';

import FacilitiesBikePartsIndex from '../../view/ebike/facilitiesBikeParts/Index';
import FacilitiesBikePartsDetail from '../../view/ebike/facilitiesBikeParts/Detail';

export default [
	<Route key="FacilitiesBikePartsIndex" path="/facilities/bike/parts/index" component={FacilitiesBikePartsIndex}/>,
	<Route key="FacilitiesBikePartsAdd" path="/facilities/bike/parts/add" component={FacilitiesBikePartsDetail}/>,
	<Route key="FacilitiesBikePartsEditFacilitiesBikePartsId" path="/facilities/bike/parts/edit/:facilitiesBikePartsId" component={FacilitiesBikePartsDetail}/>
]
