import React from 'react'
import {Route} from 'react-router-dom';

import CustomerProviderAccountDetailIndex from '../../view/distribution/customerProviderAccountDetail/Index2';
import CustomerProviderAccountDetailDetail from '../../view/distribution/customerProviderAccountDetail/Detail';
import CustomerProviderAccountDetailView from '../../view/distribution/customerProviderAccountDetail/Index';

export default [
	<Route key="CustomerProviderAccountDetailIndex" path="/customer/provider/account/detail/index2" component={CustomerProviderAccountDetailIndex}/>,
	<Route key="CustomerProviderAccountDetailAdd" path="/customer/provider/account/detail/add" component={CustomerProviderAccountDetailDetail}/>,
	<Route key="CustomerProviderAccountDetailEditCustomerProviderAccountDetailId" path="/customer/provider/account/detail/edit/:customerProviderAccountId" component={CustomerProviderAccountDetailDetail}/>,
    <Route key="CustomerProviderAccountDetailEditCustomerProviderAccountDetailIdView" path="/customer/provider/account/detail/view/:customerProviderId" component={CustomerProviderAccountDetailView}/>

]
