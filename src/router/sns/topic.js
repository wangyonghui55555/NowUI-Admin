import React from 'react'
import {Route} from 'react-router-dom';

import TopicIndex from '../../view/sns/topic/Index';
import TopicDetail from '../../view/sns/topic/Detail';

export default [
	<Route key="TopicIndex" path="/topic/index" component={TopicIndex}/>,
	<Route key="TopicAdd" path="/topic/add" component={TopicDetail}/>,
	<Route key="TopicEditTopicId" path="/topic/edit/:topicId" component={TopicDetail}/>
]
