import React from 'react'
import {Route} from 'react-router-dom';

import OrderStatisticsIndex from '../../view/distribution/orderStatistics/Index';
import OrderStatisticsDetail from '../../view/distribution/orderStatistics/Detail';

import OrderStatisticsIndex2 from '../../view/distribution/orderStatistics/Index2';
import OrderStatisticsDetail2 from '../../view/distribution/orderStatistics/Detail2';

import OrderStatisticsIndex3 from '../../view/distribution/orderStatistics/Index3';
export default [
	<Route key="OrderStatisticsIndex" path="/order/statistics/index" component={OrderStatisticsIndex}/>,
	<Route key="OrderStatisticsAdd" path="/order/statistics/add" component={OrderStatisticsDetail}/>,
	<Route key="OrderStatisticsEditOrderStatisticsId" path="/order/statistics/edit/:orderStatisticsId" component={OrderStatisticsDetail}/>,

    <Route key="OrderStatisticsIndex2" path="/order/statistics/index2" component={OrderStatisticsIndex2}/>,
    <Route key="OrderStatisticsEditOrderStatisticsId" path="/order/statistics/edit2/:related_Sites_Id" component={OrderStatisticsDetail2}/>,
   <Route key="OrderStatisticsIndex3" path="/distribution/statistics/index3" component={OrderStatisticsIndex3}/>,

]
