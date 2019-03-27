import React from 'react'
import {Route} from 'react-router-dom';

import ProductCategoryIndex from '../../view/shop/productCategory/Index';
import ProductCategoryDetail from '../../view/shop/productCategory/Detail';

export default [
	<Route key="ProductCategoryIndex" path="/product/category/index" component={ProductCategoryIndex}/>,
	<Route key="ProductCategoryAdd" path="/product/category/add" component={ProductCategoryDetail}/>,
	<Route key="ProductCategoryEditProductCategoryId" path="/product/category/edit/:productCategoryId" component={ProductCategoryDetail}/>
]
