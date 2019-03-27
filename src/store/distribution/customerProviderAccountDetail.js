const initialState = {
    customerProviderAccountId:'',
    customerProviderId: '',
    customerProviderName:'',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function customerProviderAccountDetail(state = initialState, action) {
    switch (action.type) {
        case 'customerProviderAccountDetail':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default customerProviderAccountDetail;