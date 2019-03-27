const initialState = {
    memberId: '',
    userId: '',
    tagId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function tagHistory(state = initialState, action) {
    switch (action.type) {
        case 'tagHistory':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default tagHistory;