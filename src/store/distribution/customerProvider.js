const initialState = {
    customerId: '',
    customerProviderName: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function customerProvider(state = initialState, action) {
    switch (action.type) {
        case 'customerProvider':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default customerProvider;