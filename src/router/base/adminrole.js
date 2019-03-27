import React from 'react'
import {Route} from 'react-router-dom';

import AdminRoleIndex from '../../view/base/adminrole/Index';
import AdminRoleDetail from '../../view/base/adminrole/Detail';

export default [
    <Route key="AdminRoleIndex" path="/admin/role/index" component={AdminRoleIndex}/>,
    <Route key="AdminRoleAdd" path="/admin/role/add" component={AdminRoleDetail}/>,
    <Route key="AdminRoleEditAdminId" path="/admin/role/edit/:adminRoleMapId" component={AdminRoleDetail}/>,
    <Route key="AdminRoleEditAdminId" path="/admin/role/delete/:adminRoleMapId" component={AdminRoleIndex}/>
]