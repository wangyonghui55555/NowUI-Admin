import React from 'react'
import {Route} from 'react-router-dom';

import SiteIndex from '../../view/distribution/site/Index';
import SiteDetail from '../../view/distribution/site/Detail';
import SiteTotalReport from '../../view/distribution/site/SiteTotalReport';

export default [
	<Route key="SiteIndex" path="/site/index" component={SiteIndex}/>,
	<Route key="SiteAdd" path="/site/add" component={SiteDetail}/>,
	<Route key="SiteEditSiteId" path="/site/edit/:siteId" component={SiteDetail}/>,
    <Route key="SiteTotalReport" path="/site/SiteTotalReport" component={SiteTotalReport}/>
]
