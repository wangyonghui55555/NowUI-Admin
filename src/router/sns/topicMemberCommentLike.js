import React from 'react'
import {Route} from 'react-router-dom';

import TopicMemberCommentLikeIndex from '../../view/sns/topicMemberCommentLike/Index';
import TopicMemberCommentLikeDetail from '../../view/sns/topicMemberCommentLike/Detail';

export default [
	<Route key="TopicMemberCommentLikeIndex" path="/topic/member/comment/like/index" component={TopicMemberCommentLikeIndex}/>,
	<Route key="TopicMemberCommentLikeAdd" path="/topic/member/comment/like/add" component={TopicMemberCommentLikeDetail}/>,
	<Route key="TopicMemberCommentLikeEditTopicMemberCommentLikeId" path="/topic/member/comment/like/edit/:topicMemberCommentLikeId" component={TopicMemberCommentLikeDetail}/>
]
