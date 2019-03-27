import React from 'react'
import {Route} from 'react-router-dom';

import ComplaintIndex from '../../view/distribution/complaint/Index';
import ComplaintDetail from '../../view/distribution/complaint/Detail';

export default [
	<Route key="ComplaintIndex" path="/complaint/index" component={ComplaintIndex}/>,
	<Route key="ComplaintAdd" path="/complaint/add" component={ComplaintDetail}/>,
	<Route key="ComplaintEditComplaintId" path="/complaint/edit/:complaintId" component={ComplaintDetail}/>
]
