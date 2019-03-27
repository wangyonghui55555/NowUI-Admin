import React from 'react'
import {Route} from 'react-router-dom';

import AdminIndex from '../../view/base/admin/Index';
import AdminDetail from '../../view/base/admin/Detail';
import AdminIndex2 from '../../view/base/admin/Index2';
import AdminIndex3 from '../../view/base/admin/Index3';
import AdminDetail3 from '../../view/base/admin/Detail3';
import AdminDetail2 from '../../view/base/admin/Detail2';
export default [
	<Route key="AdminIndex" path="/admin/index" component={AdminIndex}/>,
	<Route key="AdminAdd" path="/admin/add" component={AdminDetail}/>,
	<Route key="AdminEditAdminId" path="/admin/edit/:adminId" component={AdminDetail}/>,
    <Route key="AdminEditAdminId" path="/admin/delete/:adminId" component={AdminIndex}/>,

    <Route key="AdminAdminIndex2" path="/admin/site/:adminId" component={AdminIndex2}/>,
    <Route key="AdminAdminIndex3" path="/admin/role/:adminId" component={AdminIndex3}/>,
    <Route key="AdminRoleEditAdminId" path="/admin/edit1/:adminRoleMapId" component={AdminDetail3}/>,

    <Route key="AdminEditAdminId" path="/admin/delete1/:adminId" component={AdminIndex3}/>,
    <Route key="AdminAdd" path="/admin/add1/:adminId" component={AdminDetail3}/>,
    <Route key="AdminAdd" path="/admin/add2/:adminId" component={AdminDetail2}/>,
    <Route key="AdminRoleEditAdminId" path="/admin/edit2/:adminSiteMapId" component={AdminDetail2}/>,
]
