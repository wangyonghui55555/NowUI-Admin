import React from 'react'
import {Route} from 'react-router-dom';

import TopicMemberLikeIndex from '../../view/sns/topicMemberLike/Index';
import TopicMemberLikeDetail from '../../view/sns/topicMemberLike/Detail';

export default [
	<Route key="TopicMemberLikeIndex" path="/topic/member/like/index" component={TopicMemberLikeIndex}/>,
	<Route key="TopicMemberLikeAdd" path="/topic/member/like/add" component={TopicMemberLikeDetail}/>,
	<Route key="TopicMemberLikeEditTopicMemberLikeId" path="/topic/member/like/edit/:topicMemberLikeId" component={TopicMemberLikeDetail}/>
]
