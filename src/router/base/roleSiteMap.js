import React from 'react'
import {Route} from 'react-router-dom';

import RoleSiteMapIndex from '../../view/base/roleSiteMap/Index';
import RoleSiteMapDetail from '../../view/base/roleSiteMap/Detail';

export default [
	<Route key="RoleSiteMapIndex" path="/role/site/map/index" component={RoleSiteMapIndex}/>,
	<Route key="RoleSiteMapAdd" path="/role/site/map/add" component={RoleSiteMapDetail}/>,
	<Route key="RoleSiteMapEditRoleSiteMapId" path="/role/site/map/edit/:roleSiteMapId" component={RoleSiteMapDetail}/>
]
