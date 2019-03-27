import React from 'react'
import {Route} from 'react-router-dom';

import FacilitiesIndex from '../../view/ebike/facilities/Index';
import FacilitiesDetail from '../../view/ebike/facilities/Detail';

export default [
	<Route key="FacilitiesIndex" path="/facilities/index" component={FacilitiesIndex}/>,
	<Route key="FacilitiesAdd" path="/facilities/add" component={FacilitiesDetail}/>,
	<Route key="FacilitiesEditFacilitiesId" path="/facilities/edit/:facilitiesId" component={FacilitiesDetail}/>
]
