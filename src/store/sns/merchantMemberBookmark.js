const initialState = {
    merchantId: '',
    memberId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function merchantMemberBookmark(state = initialState, action) {
    switch (action.type) {
        case 'merchantMemberBookmark':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default merchantMemberBookmark;