import React from 'react'
import {Route} from 'react-router-dom';

import RoleIndex from '../../view/base/role/Index';
import RoleDetail from '../../view/base/role/Detail';

import RoleMenu from '../../view/base/role/Index2';
import RoleDetail2 from '../../view/base/role/Detail2';

import RoleAdmin from '../../view/base/role/Index3';
import RoleDetail3 from '../../view/base/role/Detail3';

export default [
	<Route key="RoleIndex" path="/role/index" component={RoleIndex}/>,
	<Route key="RoleAdd" path="/role/add" component={RoleDetail}/>,
	<Route key="RoleEditRoleId" path="/role/edit/:roleId" component={RoleDetail}/>,

    <Route key="RoleMenu" path="/role/menu/:roleId" component={RoleMenu}/>,
    <Route key="RoleAdd" path="/role/add1/:roleId" component={RoleDetail2}/>,
    <Route key="RoleEditRoleId" path="/role/edit1/:roleAdminMenuMapId" component={RoleDetail2}/>,

    <Route key="RoleMenu" path="/role/admin/:roleId" component={RoleAdmin}/>,
    <Route key="RoleAdd" path="/role/add2/:roleId" component={RoleDetail3}/>,
    <Route key="RoleEditRoleId" path="/role/edit2/:adminRoleMapId" component={RoleDetail3}/>,
]