import React from 'react'
import {Route} from 'react-router-dom';

import MenuIndex from '../../view/base/menu/Index';
import MenuDetail from '../../view/base/menu/Detail';

import MenuIndex2 from '../../view/base/menu/Index2';
import MenuDetail2 from '../../view/base/menu/Detail2';
export default [
	<Route key="MenuIndex" path="/menu/index" component={MenuIndex}/>,
	<Route key="MenuAdd" path="/menu/add" component={MenuDetail}/>,
	<Route key="MenuEditMenuId" path="/menu/edit/:menuId" component={MenuDetail}/>,

    <Route key="MenuIndex" path="/menu/index2/:menuId" component={MenuIndex2}/>,
    <Route key="MenuAdd" path="/menu/add2/:menuId" component={MenuDetail2}/>,
    <Route key="MenuEditMenuId" path="/menu/edit2/:menuId" component={MenuDetail2}/>
]