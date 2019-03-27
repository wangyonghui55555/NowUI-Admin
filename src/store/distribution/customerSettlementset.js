const initialState = {
    customerId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function customerSettlementset(state = initialState, action) {
    switch (action.type) {
        case 'customerSettlementset':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default customerSettlementset;