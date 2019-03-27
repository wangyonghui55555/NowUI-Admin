import React from 'react'
import {Route} from 'react-router-dom';

import ProductCategoryAttributeIndex from '../../view/shop/productCategoryAttribute/Index';
import ProductCategoryAttributeDetail from '../../view/shop/productCategoryAttribute/Detail';

export default [
	<Route key="ProductCategoryAttributeIndex" path="/product/category/attribute/index" component={ProductCategoryAttributeIndex}/>,
	<Route key="ProductCategoryAttributeAdd" path="/product/category/attribute/add" component={ProductCategoryAttributeDetail}/>,
	<Route key="ProductCategoryAttributeEditProductCategoryAttributeId" path="/product/category/attribute/edit/:productCategoryAttributeId" component={ProductCategoryAttributeDetail}/>
]
