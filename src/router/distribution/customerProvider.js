import React from 'react'
import {Route} from 'react-router-dom';

import CustomerProviderIndex from '../../view/distribution/customerProvider/Index';
import CustomerProviderDetail from '../../view/distribution/customerProvider/Detail';

export default [
	<Route key="CustomerProviderIndex" path="/customer/provider/index" component={CustomerProviderIndex}/>,
	<Route key="CustomerProviderAdd" path="/customer/provider/add" component={CustomerProviderDetail}/>,
	<Route key="CustomerProviderEditCustomerProviderId" path="/customer/provider/edit/:customerProviderId" component={CustomerProviderDetail}/>
]
