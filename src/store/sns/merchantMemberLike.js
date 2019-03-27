const initialState = {
    merchantId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function merchantMemberLike(state = initialState, action) {
    switch (action.type) {
        case 'merchantMemberLike':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default merchantMemberLike;