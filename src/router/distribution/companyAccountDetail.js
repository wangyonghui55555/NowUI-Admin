import React from 'react'
import {Route} from 'react-router-dom';

import CompanyAccountDetailIndex from '../../view/distribution/companyAccountDetail/Index';
import CompanyAccountDetailDetail from '../../view/distribution/companyAccountDetail/Detail';

export default [
	<Route key="CompanyAccountDetailIndex" path="/companyAccountDetail/index" component={CompanyAccountDetailIndex}/>,
	<Route key="CompanyAccountDetailAdd" path="/company/accountDetail/add" component={CompanyAccountDetailDetail}/>,
	<Route key="CompanyAccountDetailEditCompanyAccountDetailId" path="/company/account/detail/edit/:companyId" component={CompanyAccountDetailDetail}/>,
    <Route key="CompanyAccountDetailViewCompanyAccountDetailId" path="/companyAccountDetail/view/:companyId" component={CompanyAccountDetailDetail}/>
]
