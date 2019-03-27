const initialState = {
    companyId: '',
    incomeRatio: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function riderDividend(state = initialState, action) {
    switch (action.type) {
        case 'riderDividend':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default riderDividend;