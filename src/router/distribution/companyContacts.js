import React from 'react'
import {Route} from 'react-router-dom';

import CompanyContactsIndex from '../../view/distribution/companyContacts/Index';
import CompanyContactsDetail from '../../view/distribution/companyContacts/Detail';

export default [
	<Route key="CompanyContactsIndex" path="/company/contacts/index" component={CompanyContactsIndex}/>,
	<Route key="CompanyContactsAdd" path="/company/contacts/add" component={CompanyContactsDetail}/>,
	<Route key="CompanyContactsEditCompanyContactsId" path="/company/contacts/edit/:companyContactsId" component={CompanyContactsDetail}/>
]
