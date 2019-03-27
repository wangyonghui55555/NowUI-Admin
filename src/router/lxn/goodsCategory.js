import React from 'react'
import {Route} from 'react-router-dom';

import GoodsCategoryIndex from '../../view/lxn/goodsCategory/Index';
import GoodsCategoryDetail from '../../view/lxn/goodsCategory/Detail';

export default [
	<Route key="GoodsCategoryIndex" path="/goods/category/index" component={GoodsCategoryIndex}/>,
	<Route key="GoodsCategoryAdd" path="/goods/category/add" component={GoodsCategoryDetail}/>,
	<Route key="GoodsCategoryEditGoodsCategoryId" path="/goods/category/edit/:goodsCategoryId" component={GoodsCategoryDetail}/>
]
