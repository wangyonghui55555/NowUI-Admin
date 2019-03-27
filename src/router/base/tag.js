import React from 'react'
import {Route} from 'react-router-dom';

import TagIndex from '../../view/base/tag/Index';
import TagDetail from '../../view/base/tag/Detail';

export default [
	<Route key="TagIndex" path="/tag/index" component={TagIndex}/>,
	<Route key="TagAdd" path="/tag/add" component={TagDetail}/>,
	<Route key="TagEditTagId" path="/tag/edit/:tagId" component={TagDetail}/>
]
