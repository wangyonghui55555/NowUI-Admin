import React from 'react'
import {Route} from 'react-router-dom';

import MerchantMemberLikeIndex from '../../view/sns/merchantMemberLike/Index';
import MerchantMemberLikeDetail from '../../view/sns/merchantMemberLike/Detail';

export default [
	<Route key="MerchantMemberLikeIndex" path="/merchant/member/like/index" component={MerchantMemberLikeIndex}/>,
	<Route key="MerchantMemberLikeAdd" path="/merchant/member/like/add" component={MerchantMemberLikeDetail}/>,
	<Route key="MerchantMemberLikeEditMerchantMemberLikeId" path="/merchant/member/like/edit/:merchantMemberLikeId" component={MerchantMemberLikeDetail}/>
]
