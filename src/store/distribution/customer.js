const initialState = {
    customerCode: '',
    customerCompanyName: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function customer(state = initialState, action) {
    switch (action.type) {
        case 'customer':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default customer;