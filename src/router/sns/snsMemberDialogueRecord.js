import React from 'react'
import {Route} from 'react-router-dom';

import SnsMemberDialogueRecordIndex from '../../view/sns/snsMemberDialogueRecord/Index';
import SnsMemberDialogueRecordDetail from '../../view/sns/snsMemberDialogueRecord/Detail';

export default [
	<Route key="SnsMemberDialogueRecordIndex" path="/sns/member/dialogue/record/index" component={SnsMemberDialogueRecordIndex}/>,
	<Route key="SnsMemberDialogueRecordAdd" path="/sns/member/dialogue/record/add" component={SnsMemberDialogueRecordDetail}/>,
	<Route key="SnsMemberDialogueRecordEditSnsMemberDialogueRecordId" path="/sns/member/dialogue/record/edit/:snsMemberDialogueRecordId" component={SnsMemberDialogueRecordDetail}/>
]
