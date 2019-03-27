import React from 'react'
import {Route} from 'react-router-dom';

import ProductCategoryAttributeGroupIndex from '../../view/shop/productCategoryAttributeGroup/Index';
import ProductCategoryAttributeGroupDetail from '../../view/shop/productCategoryAttributeGroup/Detail';

export default [
	<Route key="ProductCategoryAttributeGroupIndex" path="/product/category/attribute/group/index" component={ProductCategoryAttributeGroupIndex}/>,
	<Route key="ProductCategoryAttributeGroupAdd" path="/product/category/attribute/group/add" component={ProductCategoryAttributeGroupDetail}/>,
	<Route key="ProductCategoryAttributeGroupEditProductCategoryAttributeGroupId" path="/product/category/attribute/group/edit/:productCategoryAttributeGroupId" component={ProductCategoryAttributeGroupDetail}/>
]
