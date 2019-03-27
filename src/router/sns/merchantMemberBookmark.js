import React from 'react'
import {Route} from 'react-router-dom';

import MerchantMemberBookmarkIndex from '../../view/sns/merchantMemberBookmark/Index';
import MerchantMemberBookmarkDetail from '../../view/sns/merchantMemberBookmark/Detail';

export default [
	<Route key="MerchantMemberBookmarkIndex" path="/merchant/member/bookmark/index" component={MerchantMemberBookmarkIndex}/>,
	<Route key="MerchantMemberBookmarkAdd" path="/merchant/member/bookmark/add" component={MerchantMemberBookmarkDetail}/>,
	<Route key="MerchantMemberBookmarkEditMerchantMemberBookmarkId" path="/merchant/member/bookmark/edit/:merchantMemberBookmarkId" component={MerchantMemberBookmarkDetail}/>
]
