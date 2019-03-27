import React from 'react'
import {Route} from 'react-router-dom';

import TagHistoryIndex from '../../view/base/tagHistory/Index';
import TagHistoryDetail from '../../view/base/tagHistory/Detail';

export default [
	<Route key="TagHistoryIndex" path="/tag/history/index" component={TagHistoryIndex}/>,
	<Route key="TagHistoryAdd" path="/tag/history/add" component={TagHistoryDetail}/>,
	<Route key="TagHistoryEditTagHistoryId" path="/tag/history/edit/:tagHistoryId" component={TagHistoryDetail}/>
]
