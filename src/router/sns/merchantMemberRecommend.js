import React from 'react'
import {Route} from 'react-router-dom';

import MerchantMemberRecommendIndex from '../../view/sns/merchantMemberRecommend/Index';
import MerchantMemberRecommendDetail from '../../view/sns/merchantMemberRecommend/Detail';

export default [
	<Route key="MerchantMemberRecommendIndex" path="/merchant/member/recommend/index" component={MerchantMemberRecommendIndex}/>,
	<Route key="MerchantMemberRecommendAdd" path="/merchant/member/recommend/add" component={MerchantMemberRecommendDetail}/>,
	<Route key="MerchantMemberRecommendEditMerchantMemberRecommendId" path="/merchant/member/recommend/edit/:merchantMemberRecommendId" component={MerchantMemberRecommendDetail}/>
]
