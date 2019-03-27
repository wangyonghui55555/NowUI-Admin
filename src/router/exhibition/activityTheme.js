import React from 'react'
import {Route} from 'react-router-dom';

import ActivityThemeIndex from '../../view/exhibition/activityTheme/Index';
import ActivityThemeDetail from '../../view/exhibition/activityTheme/Detail';

export default [
	<Route key="ActivityThemeIndex" path="/activity/theme/index" component={ActivityThemeIndex}/>,
	<Route key="ActivityThemeAdd" path="/activity/theme/add" component={ActivityThemeDetail}/>,
	<Route key="ActivityThemeEditActivityThemeId" path="/activity/theme/edit/:activityThemeId" component={ActivityThemeDetail}/>
]
