import React from 'react'
import {Route} from 'react-router-dom';

import ProductMap from '../../view/shop/product/Map';
import ProductIndex from '../../view/shop/product/Index';
import ProductDetail from '../../view/shop/product/Detail';

export default [
    <Route key="ProductMap" path="/product/map" component={ProductMap}/>,
    <Route key="ProductIndex" path="/product/index" component={ProductIndex}/>,
	<Route key="ProductAdd" path="/product/add" component={ProductDetail}/>,
	<Route key="ProductEditProductId" path="/product/edit/:productId" component={ProductDetail}/>
]