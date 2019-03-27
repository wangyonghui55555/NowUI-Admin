import React from 'react'
import {Route} from 'react-router-dom';

import ForumAuditIndex from '../../view/sns/forumAudit/Index';
import ForumAuditDetail from '../../view/sns/forumAudit/Detail';

export default [
	<Route key="ForumAuditIndex" path="/forum/audit/index" component={ForumAuditIndex}/>,
	<Route key="ForumAuditAdd" path="/forum/audit/add" component={ForumAuditDetail}/>,
	<Route key="ForumAuditEditForumAuditId" path="/forum/audit/edit/:forumAuditId" component={ForumAuditDetail}/>
]
