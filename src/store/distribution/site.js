const initialState = {
    siteCode: '',
    siteName: '',
    companyId: '',
    branchCompanyId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function site(state = initialState, action) {
    switch (action.type) {
        case 'site':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default site;