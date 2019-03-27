const initialState = {
    companyId: '',
    branchCompanyId: '',
    customerId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function branchCompanyDividend(state = initialState, action) {
    switch (action.type) {
        case 'branchCompanyDividend':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default branchCompanyDividend;