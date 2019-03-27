import React from 'react'
import {Route} from 'react-router-dom';

import CustomerContactsIndex from '../../view/distribution/customerContacts/Index';
import CustomerContactsDetail from '../../view/distribution/customerContacts/Detail';

export default [
	<Route key="CustomerContactsIndex" path="/customer/contacts/index" component={CustomerContactsIndex}/>,
	<Route key="CustomerContactsAdd" path="/customer/contacts/add" component={CustomerContactsDetail}/>,
	<Route key="CustomerContactsEditCustomerContactsId" path="/customer/contacts/edit/:customerContactsId" component={CustomerContactsDetail}/>
]
