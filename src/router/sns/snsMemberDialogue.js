import React from 'react'
import {Route} from 'react-router-dom';

import SnsMemberDialogueIndex from '../../view/sns/snsMemberDialogue/Index';
import SnsMemberDialogueDetail from '../../view/sns/snsMemberDialogue/Detail';

export default [
	<Route key="SnsMemberDialogueIndex" path="/sns/member/dialogue/index" component={SnsMemberDialogueIndex}/>,
	<Route key="SnsMemberDialogueAdd" path="/sns/member/dialogue/add" component={SnsMemberDialogueDetail}/>,
	<Route key="SnsMemberDialogueEditSnsMemberDialogueId" path="/sns/member/dialogue/edit/:snsMemberDialogueId" component={SnsMemberDialogueDetail}/>
]
