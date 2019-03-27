import React from 'react'
import {Route} from 'react-router-dom';

import PageIndex from '../../view/base/page/Index';
import PageDetail from '../../view/base/page/Detail';

export default [
    <Route key="PageIndex" path="/page/index" component={PageIndex}/>,
    <Route key="PageAdd" path="/page/add" component={PageDetail}/>,
    <Route key="PageEditTagId" path="/page/edit/:menuId" component={PageDetail}/>,
]