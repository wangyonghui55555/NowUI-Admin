import React from 'react'
import {Route} from 'react-router-dom';

import MemberShippingIndex from '../../view/lxn/memberShipping/Index';
import MemberShippingDetail from '../../view/lxn/memberShipping/Detail';

export default [
	<Route key="MemberShippingIndex" path="/member/shipping/index" component={MemberShippingIndex}/>,
	<Route key="MemberShippingAdd" path="/member/shipping/add" component={MemberShippingDetail}/>,
	<Route key="MemberShippingEditMemberShippingId" path="/member/shipping/edit/:memberShippingId" component={MemberShippingDetail}/>
]
