import React from 'react'
import {Route} from 'react-router-dom';

import SiteCostOutIndex from '../../view/distribution/siteCostOut/Index';
import SiteCostOutDetail from '../../view/distribution/siteCostOut/Detail';

export default [
	<Route key="SiteCostOutIndex" path="/site/cost/out/index" component={SiteCostOutIndex}/>,
	<Route key="SiteCostOutAdd" path="/site/cost/out/add" component={SiteCostOutDetail}/>,
	<Route key="SiteCostOutEditSiteCostOutId" path="/site/cost/out/edit/:siteCostOutId" component={SiteCostOutDetail}/>
]
