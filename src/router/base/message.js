import React from 'react'
import {Route} from 'react-router-dom';

import MessageIndex from '../../view/base/message/Index';
import MessageDetail from '../../view/base/message/Detail';

export default [
	<Route key="MessageIndex" path="/message/index" component={MessageIndex}/>,
	<Route key="MessageAdd" path="/message/add" component={MessageDetail}/>,
	<Route key="MessageEditMessageId" path="/message/edit/:messageId" component={MessageDetail}/>
]