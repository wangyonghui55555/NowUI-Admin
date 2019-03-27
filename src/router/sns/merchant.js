import React from 'react'
import {Route} from 'react-router-dom';

import MerchantIndex from '../../view/sns/merchant/Index';
import MerchantDetail from '../../view/sns/merchant/Detail';

export default [
	<Route key="MerchantIndex" path="/merchant/index" component={MerchantIndex}/>,
	<Route key="MerchantAdd" path="/merchant/add" component={MerchantDetail}/>,
	<Route key="MerchantEditMerchantId" path="/merchant/edit/:merchantId" component={MerchantDetail}/>
]
