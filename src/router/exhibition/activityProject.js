import React from 'react'
import {Route} from 'react-router-dom';

import ActivityProjectIndex from '../../view/exhibition/activityProject/Index';
import ActivityProjectDetail from '../../view/exhibition/activityProject/Detail';

export default [
	<Route key="ActivityProjectIndex" path="/activity/project/index" component={ActivityProjectIndex}/>,
	<Route key="ActivityProjectAdd" path="/activity/project/add" component={ActivityProjectDetail}/>,
	<Route key="ActivityProjectEditActivityProjectId" path="/activity/project/edit/:activityProjectId" component={ActivityProjectDetail}/>
]
