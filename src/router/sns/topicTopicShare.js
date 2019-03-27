import React from 'react'
import {Route} from 'react-router-dom';

import TopicTopicShareIndex from '../../view/sns/topicTopicShare/Index';
import TopicTopicShareDetail from '../../view/sns/topicTopicShare/Detail';

export default [
	<Route key="TopicTopicShareIndex" path="/topic/topic/share/index" component={TopicTopicShareIndex}/>,
	<Route key="TopicTopicShareAdd" path="/topic/topic/share/add" component={TopicTopicShareDetail}/>,
	<Route key="TopicTopicShareEditTopicTopicShareId" path="/topic/topic/share/edit/:topicTopicShareId" component={TopicTopicShareDetail}/>
]
