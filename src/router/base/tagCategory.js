import React from 'react'
import {Route} from 'react-router-dom';

import TagCategoryIndex from '../../view/base/tagCategory/Index';
import TagCategoryDetail from '../../view/base/tagCategory/Detail';

export default [
	<Route key="TagCategoryIndex" path="/tag/category/index" component={TagCategoryIndex}/>,
	<Route key="TagCategoryAdd" path="/tag/category/add" component={TagCategoryDetail}/>,
	<Route key="TagCategoryEditTagCategoryId" path="/tag/category/edit/:tagCategoryId" component={TagCategoryDetail}/>
]
