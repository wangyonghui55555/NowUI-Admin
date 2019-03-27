import React from 'react'
import {Route} from 'react-router-dom';

import SiteProviderMapIndex from '../../view/distribution/siteProviderMap/Index';
import SiteProviderMapDetail from '../../view/distribution/siteProviderMap/Detail';

export default [
	<Route key="SiteProviderMapIndex" path="/site/provider/map/index" component={SiteProviderMapIndex}/>,
	<Route key="SiteProviderMapAdd" path="/site/provider/map/add" component={SiteProviderMapDetail}/>,
	<Route key="SiteProviderMapEditSiteProviderMapId" path="/site/provider/map/edit/:siteProviderId" component={SiteProviderMapDetail}/>
]
