import React from 'react'
import {Route} from 'react-router-dom';

import TopicMemberBookmarkIndex from '../../view/sns/topicMemberBookmark/Index';
import TopicMemberBookmarkDetail from '../../view/sns/topicMemberBookmark/Detail';

export default [
	<Route key="TopicMemberBookmarkIndex" path="/topic/member/bookmark/index" component={TopicMemberBookmarkIndex}/>,
	<Route key="TopicMemberBookmarkAdd" path="/topic/member/bookmark/add" component={TopicMemberBookmarkDetail}/>,
	<Route key="TopicMemberBookmarkEditTopicMemberBookmarkId" path="/topic/member/bookmark/edit/:topicMemberBookmarkId" component={TopicMemberBookmarkDetail}/>
]
