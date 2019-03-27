import React from 'react'
import {Route} from 'react-router-dom';

import TagFrontendCategoryIndex from '../../view/base/tagFrontendCategory/Index';
import TagFrontendCategoryDetail from '../../view/base/tagFrontendCategory/Detail';

export default [
	<Route key="TagFrontendCategoryIndex" path="/tag/frontend/category/index" component={TagFrontendCategoryIndex}/>,
	<Route key="TagFrontendCategoryAdd" path="/tag/frontend/category/add" component={TagFrontendCategoryDetail}/>,
	<Route key="TagFrontendCategoryEditTagFrontendCategoryId" path="/tag/frontend/category/edit/:tagFrontendCategoryId" component={TagFrontendCategoryDetail}/>
]
