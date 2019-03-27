import React from 'react'
import {Route} from 'react-router-dom';

import DistributionOrderMap from '../../view/distribution/distributionOrder/Map';
import DistributionOrderIndex from '../../view/distribution/distributionOrder/Index';
import DistributionOrderIndex2 from '../../view/distribution/distributionOrder/Index2';
import DistributionOrderDetail from '../../view/distribution/distributionOrder/Detail';
import DistributionOrderCustomerDetail from '../../view/distribution/distributionOrder/CustomerOrderDetail';
import DistributionOrderSiteDetail from '../../view/distribution/distributionOrder/SiteOrderDetail';
import DistributionOrderRiderDetail from '../../view/distribution/distributionOrder/RiderOrderDetail';

export default [
    <Route key="DistributionOrderMap" path="/distribution/order/map" component={DistributionOrderMap}/>,
	<Route key="DistributionOrderIndex" path="/distribution/order/index" component={DistributionOrderIndex}/>,
    <Route key="DistributionOrderIndex2" path="/distribution/order/index2" component={DistributionOrderIndex2}/>,
    <Route key="DistributionOrderCustomerDetail" path="/distribution/order/CustomerOrderDetail/:customerId" component={DistributionOrderCustomerDetail}/>,
    <Route key="DistributionOrderSiteDetail" path="/distribution/order/SiteOrderDetail/:siteId" component={DistributionOrderSiteDetail}/>,
    <Route key="DistributionOrderRiderDetail" path="/distribution/order/RiderOrderDetail/:riderId" component={DistributionOrderRiderDetail}/>,
	<Route key="DistributionOrderAdd" path="/distribution/order/add" component={DistributionOrderDetail}/>,
	<Route key="DistributionOrderEditDistributionOrderId" path="/distribution/order/edit/:distributionOrderId" component={DistributionOrderDetail}/>,
]
