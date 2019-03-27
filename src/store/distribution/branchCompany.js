const initialState = {
    companyId: '',
    branchCompanyName: '',
    branchCompanyLogoId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function branchCompany(state = initialState, action) {
    switch (action.type) {
        case 'branchCompany':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default branchCompany;