import React from 'react'
import {Route} from 'react-router-dom';

import BranchCompanyAccountDetailIndex from '../../view/distribution/branchCompanyAccountDetail/Index';
import BranchCompanyAccountIndex from '../../view/distribution/branchCompanyAccountDetail/branchAccountIndex';
import BranchCompanyAccountDetailDetail from '../../view/distribution/branchCompanyAccountDetail/Detail';

export default [
	<Route key="BranchCompanyAccountDetailIndex" path="/branch/company/account/detail/index/:branchCompanyId" component={BranchCompanyAccountDetailIndex}/>,
    <Route key="BranchCompanyAccountIndex" path="/branch/company/account/detail/branchAccountIndex" component={BranchCompanyAccountIndex}/>,
	<Route key="BranchCompanyAccountDetailAdd" path="/branch/company/account/detail/add" component={BranchCompanyAccountDetailDetail}/>,
	<Route key="BranchCompanyAccountDetailEditBranchCompanyAccountDetailId" path="/branch/company/account/detail/edit/:branchCompanyAccountDetailId" component={BranchCompanyAccountDetailDetail}/>
]
