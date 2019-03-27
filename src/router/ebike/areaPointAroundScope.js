import React from 'react'
import {Route} from 'react-router-dom';

import AreaPointAroundScopeMap from '../../view/ebike/areaPointAroundScope/Map';
import AreaPointAroundScopeIndex from '../../view/ebike/areaPointAroundScope/Index';
import AreaPointAroundScopeDetail from '../../view/ebike/areaPointAroundScope/Detail';

export default [
    <Route key="AreaPointAroundScopeMap" path="/area/point/around/scope/map" component={AreaPointAroundScopeMap}/>,
	<Route key="AreaPointAroundScopeIndex" path="/area/point/around/scope/index" component={AreaPointAroundScopeIndex}/>,
	<Route key="AreaPointAroundScopeAdd" path="/area/point/around/scope/add" component={AreaPointAroundScopeDetail}/>,
	<Route key="AreaPointAroundScopeEditAreaPointAroundScopeId" path="/area/point/around/scope/edit/:areaPointAroundScopeId" component={AreaPointAroundScopeDetail}/>
]
