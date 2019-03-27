const initialState = {
    initiateMemberId: '',
    respondMemberId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function snsMemberDialogue(state = initialState, action) {
    switch (action.type) {
        case 'snsMemberDialogue':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default snsMemberDialogue;