const initialState = {
    memberId: '',
    merchantName: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function merchantMemberRecommend(state = initialState, action) {
    switch (action.type) {
        case 'merchantMemberRecommend':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default merchantMemberRecommend;