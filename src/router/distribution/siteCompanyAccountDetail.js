import React from 'react'
import {Route} from 'react-router-dom';

import SiteCompanyAccountDetailIndex from '../../view/distribution/siteCompanyAccountDetail/Index';
import SiteCompanyAccountDetailDetail from '../../view/distribution/siteCompanyAccountDetail/Detail';

export default [
	<Route key="SiteCompanyAccountDetailIndex" path="/site/company/account/detail/index" component={SiteCompanyAccountDetailIndex}/>,
	<Route key="SiteCompanyAccountDetailAdd" path="/site/company/account/detail/add" component={SiteCompanyAccountDetailDetail}/>,
	<Route key="SiteCompanyAccountDetailEditSiteCompanyAccountDetailId" path="/site/company/account/detail/edit/:siteCompanyAccountDetailId" component={SiteCompanyAccountDetailDetail}/>,
    <Route key="SiteCompanyAccountDetailEditSiteCompanyAccountDetailId" path="/site/company/account/detail/view/:siteId" component={SiteCompanyAccountDetailDetail}/>
]
