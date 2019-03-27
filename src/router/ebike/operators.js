import React from 'react'
import {Route} from 'react-router-dom';

import OperatorsIndex from '../../view/ebike/operators/Index';
import OperatorsDetail from '../../view/ebike/operators/Detail';

export default [
	<Route key="OperatorsIndex" path="/operators/index" component={OperatorsIndex}/>,
	<Route key="OperatorsAdd" path="/operators/add" component={OperatorsDetail}/>,
	<Route key="OperatorsEditOperatorsId" path="/operators/edit/:operatorsId" component={OperatorsDetail}/>
]
