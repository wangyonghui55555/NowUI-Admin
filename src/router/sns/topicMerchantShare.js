import React from 'react'
import {Route} from 'react-router-dom';

import TopicMerchantShareIndex from '../../view/sns/topicMerchantShare/Index';
import TopicMerchantShareDetail from '../../view/sns/topicMerchantShare/Detail';

export default [
	<Route key="TopicMerchantShareIndex" path="/topic/merchant/share/index" component={TopicMerchantShareIndex}/>,
	<Route key="TopicMerchantShareAdd" path="/topic/merchant/share/add" component={TopicMerchantShareDetail}/>,
	<Route key="TopicMerchantShareEditTopicMerchantShareId" path="/topic/merchant/share/edit/:topicMerchantShareId" component={TopicMerchantShareDetail}/>
]
