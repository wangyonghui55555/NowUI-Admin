import React from 'react'
import {Route} from 'react-router-dom';

import TopicForumMapIndex from '../../view/sns/topicForumMap/Index';
import TopicForumMapDetail from '../../view/sns/topicForumMap/Detail';

export default [
	<Route key="TopicForumMapIndex" path="/topic/forum/map/index" component={TopicForumMapIndex}/>,
	<Route key="TopicForumMapAdd" path="/topic/forum/map/add" component={TopicForumMapDetail}/>,
	<Route key="TopicForumMapEditTopicForumMapId" path="/topic/forum/map/edit/:topicForumMapId" component={TopicForumMapDetail}/>
]
