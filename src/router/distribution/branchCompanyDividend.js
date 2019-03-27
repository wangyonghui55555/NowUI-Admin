import React from 'react'
import {Route} from 'react-router-dom';

import BranchCompanyDividendIndex from '../../view/distribution/branchCompanyDividend/Index';
import BranchCompanyDividendDetail from '../../view/distribution/branchCompanyDividend/Detail';

export default [
	<Route key="BranchCompanyDividendIndex" path="/branch/company/dividend/index" component={BranchCompanyDividendIndex}/>,
	<Route key="BranchCompanyDividendAdd" path="/branch/company/dividend/add" component={BranchCompanyDividendDetail}/>,
	<Route key="BranchCompanyDividendEditBranchCompanyDividendId" path="/branch/company/dividend/edit/:branchCompanyDividendId" component={BranchCompanyDividendDetail}/>
]
