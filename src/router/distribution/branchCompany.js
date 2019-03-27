import React from 'react'
import {Route} from 'react-router-dom';

import BranchCompanyIndex from '../../view/distribution/branchCompany/Index';
import BranchCompanyDetail from '../../view/distribution/branchCompany/Detail';

export default [
	<Route key="BranchCompanyIndex" path="/branch/company/index" component={BranchCompanyIndex}/>,
	<Route key="BranchCompanyAdd" path="/branch/company/add" component={BranchCompanyDetail}/>,
	<Route key="BranchCompanyEditBranchCompanyId" path="/branch/company/edit/:branchCompanyId" component={BranchCompanyDetail}/>
]
