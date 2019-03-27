import React from 'react'
import {Route} from 'react-router-dom';

import TopicMemberCommentIndex from '../../view/sns/topicMemberComment/Index';
import TopicMemberCommentDetail from '../../view/sns/topicMemberComment/Detail';

export default [
	<Route key="TopicMemberCommentIndex" path="/topic/member/comment/index" component={TopicMemberCommentIndex}/>,
	<Route key="TopicMemberCommentAdd" path="/topic/member/comment/add" component={TopicMemberCommentDetail}/>,
	<Route key="TopicMemberCommentEditTopicMemberCommentId" path="/topic/member/comment/edit/:topicMemberCommentId" component={TopicMemberCommentDetail}/>
]
