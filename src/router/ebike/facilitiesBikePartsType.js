import React from 'react'
import {Route} from 'react-router-dom';

import FacilitiesBikePartsTypeIndex from '../../view/ebike/facilitiesBikePartsType/Index';
import FacilitiesBikePartsTypeDetail from '../../view/ebike/facilitiesBikePartsType/Detail';

export default [
	<Route key="FacilitiesBikePartsTypeIndex" path="/facilities/bike/parts/type/index" component={FacilitiesBikePartsTypeIndex}/>,
	<Route key="FacilitiesBikePartsTypeAdd" path="/facilities/bike/parts/type/add" component={FacilitiesBikePartsTypeDetail}/>,
	<Route key="FacilitiesBikePartsTypeEditFacilitiesBikePartsTypeId" path="/facilities/bike/parts/type/edit/:facilitiesBikePartsTypeId" component={FacilitiesBikePartsTypeDetail}/>
]
