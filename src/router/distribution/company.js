import React from 'react'
import {Route} from 'react-router-dom';

import CompanyIndex from '../../view/distribution/company/Index';
import CompanyDetail from '../../view/distribution/company/Detail';

export default [
	<Route key="CompanyIndex" path="/company/index" component={CompanyIndex}/>,
	<Route key="CompanyAdd" path="/company/add" component={CompanyDetail}/>,
	<Route key="CompanyEditCompanyId" path="/company/edit/:companyId" component={CompanyDetail}/>
]
