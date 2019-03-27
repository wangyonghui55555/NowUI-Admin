import React from 'react'
import {Route} from 'react-router-dom';

import CustomerOrderTotalReport from '../../view/distribution/customer/OrderTotalReport';
import CustomerIndex from '../../view/distribution/customer/Index';
import CustomerDetail from '../../view/distribution/customer/Detail';

import CustomerIndex2 from '../../view/distribution/customer/Index2';
import CustomerDetail2 from '../../view/distribution/customer/Detail2';
export default [
    <Route key="CustomerOrderTotalReport" path="/customer/OrderTotalReport" component={CustomerOrderTotalReport}/>,
	<Route key="CustomerIndex" path="/customer/index" component={CustomerIndex}/>,
	<Route key="CustomerAdd" path="/customer/add" component={CustomerDetail}/>,
    //<Route key="CustomerServiceInformationManagement" path="/customer/CustomerServiceInformationManagement" component={CustomerServiceInformationManagement}/>,
	<Route key="CustomerEditCustomerId" path="/customer/edit/:customerId" component={CustomerDetail}/>,

    <Route key="CustomerIndex2" path="/customer/index2" component={CustomerIndex2}/>,
    <Route key="CustomerAdd2" path="/customer/add2" component={CustomerDetail2}/>,
    <Route key="CustomerEditCustomerId2" path="/customer/edit2/:customerId" component={CustomerDetail2}/>,

]
