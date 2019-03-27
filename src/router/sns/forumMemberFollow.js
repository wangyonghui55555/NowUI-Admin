import React from 'react'
import {Route} from 'react-router-dom';

import ForumMemberFollowIndex from '../../view/sns/forumMemberFollow/Index';
import ForumMemberFollowDetail from '../../view/sns/forumMemberFollow/Detail';

export default [
	<Route key="ForumMemberFollowIndex" path="/forum/member/follow/index" component={ForumMemberFollowIndex}/>,
	<Route key="ForumMemberFollowAdd" path="/forum/member/follow/add" component={ForumMemberFollowDetail}/>,
	<Route key="ForumMemberFollowEditForumMemberFollowId" path="/forum/member/follow/edit/:forumMemberFollowId" component={ForumMemberFollowDetail}/>
]
