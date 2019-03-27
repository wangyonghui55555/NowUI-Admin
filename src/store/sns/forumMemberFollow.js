const initialState = {
    memberId: '',
    forumId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function forumMemberFollow(state = initialState, action) {
    switch (action.type) {
        case 'forumMemberFollow':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default forumMemberFollow;