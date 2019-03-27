const initialState = {
    memberId: '',
    tagId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function memberTag(state = initialState, action) {
    switch (action.type) {
        case 'memberTag':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default memberTag;