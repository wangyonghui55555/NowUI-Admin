const initialState = {
    companyId: '',
    branchCompanyId: '',
    siteId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function siteCostOut(state = initialState, action) {
    switch (action.type) {
        case 'siteCostOut':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default siteCostOut;