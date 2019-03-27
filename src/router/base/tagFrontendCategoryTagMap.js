import React from 'react'
import {Route} from 'react-router-dom';

import TagFrontendCategoryTagMapIndex from '../../view/base/tagFrontendCategoryTagMap/Index';
import TagFrontendCategoryTagMapDetail from '../../view/base/tagFrontendCategoryTagMap/Detail';

export default [
	<Route key="TagFrontendCategoryTagMapIndex" path="/tag/frontend/category/tag/map/index" component={TagFrontendCategoryTagMapIndex}/>,
	<Route key="TagFrontendCategoryTagMapAdd" path="/tag/frontend/category/tag/map/add" component={TagFrontendCategoryTagMapDetail}/>,
	<Route key="TagFrontendCategoryTagMapEditTagFrontendCategoryTagMapId" path="/tag/frontend/category/tag/map/edit/:tagFrontendCategoryTagMapId" component={TagFrontendCategoryTagMapDetail}/>
]
