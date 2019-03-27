const initialState = {
    memberId: '',
    orderNo: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function memberPay(state = initialState, action) {
    switch (action.type) {
        case 'memberPay':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default memberPay;