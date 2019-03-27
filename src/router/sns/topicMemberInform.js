import React from 'react'
import {Route} from 'react-router-dom';

import TopicMemberInformIndex from '../../view/sns/topicMemberInform/Index';
import TopicMemberInformDetail from '../../view/sns/topicMemberInform/Detail';

export default [
	<Route key="TopicMemberInformIndex" path="/topic/member/inform/index" component={TopicMemberInformIndex}/>,
	<Route key="TopicMemberInformAdd" path="/topic/member/inform/add" component={TopicMemberInformDetail}/>,
	<Route key="TopicMemberInformEditTopicMemberInformId" path="/topic/member/inform/edit/:topicMemberInformId" component={TopicMemberInformDetail}/>
]
