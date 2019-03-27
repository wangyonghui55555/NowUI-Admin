const initialState = {
    memberId: '',
    transactionType: '',
    tradingPlatform: '',
    orderNo: '',
    platformSerialNumber: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function memberAccountDetail(state = initialState, action) {
    switch (action.type) {
        case 'memberAccountDetail':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default memberAccountDetail;