import React from 'react'
import {Route} from 'react-router-dom';

import RoleMenuMapIndex from '../../view/base/roleMenuMap/Index';
import RoleMenuMapDetail from '../../view/base/roleMenuMap/Detail';

export default [
	<Route key="RoleMenuMapIndex" path="/role/menu/map/index" component={RoleMenuMapIndex}/>,
	<Route key="RoleMenuMapAdd" path="/role/menu/map/add" component={RoleMenuMapDetail}/>,
	<Route key="RoleMenuMapEditRoleMenuMapId" path="/role/menu/map/edit/:roleAdminMenuMapId" component={RoleMenuMapDetail}/>
]
