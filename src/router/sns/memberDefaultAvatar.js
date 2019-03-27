import React from 'react'
import {Route} from 'react-router-dom';

import MemberDefaultAvatarIndex from '../../view/sns/memberDefaultAvatar/Index';
import MemberDefaultAvatarDetail from '../../view/sns/memberDefaultAvatar/Detail';

export default [
	<Route key="MemberDefaultAvatarIndex" path="/member/default/avatar/index" component={MemberDefaultAvatarIndex}/>,
	<Route key="MemberDefaultAvatarAdd" path="/member/default/avatar/add" component={MemberDefaultAvatarDetail}/>,
	<Route key="MemberDefaultAvatarEditMemberDefaultAvatarId" path="/member/default/avatar/edit/:memberDefaultAvatarId" component={MemberDefaultAvatarDetail}/>
]