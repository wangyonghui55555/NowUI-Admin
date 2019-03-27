import React from 'react'
import {Route} from 'react-router-dom';

import SiteDividendIndex from '../../view/distribution/siteDividend/Index';
import SiteDividendDetail from '../../view/distribution/siteDividend/Detail';

export default [
	<Route key="SiteDividendIndex" path="/site/dividend/index" component={SiteDividendIndex}/>,
	<Route key="SiteDividendAdd" path="/site/dividend/add" component={SiteDividendDetail}/>,
	<Route key="SiteDividendEditSiteDividendId" path="/site/dividend/edit/:siteDividendId" component={SiteDividendDetail}/>
]
