const initialState = {
    memberDialogueId: '',
    memberId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function snsMemberDialogueRecord(state = initialState, action) {
    switch (action.type) {
        case 'snsMemberDialogueRecord':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default snsMemberDialogueRecord;