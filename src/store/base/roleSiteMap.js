const initialState = {
    roleName: '',
    companyName: '',
    siteName: '',
    branchCompanyName: '',
    customerCompanyName: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function roleSiteMap(state = initialState, action) {
    switch (action.type) {
        case 'roleSiteMap':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default roleSiteMap;