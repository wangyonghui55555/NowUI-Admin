const initialState = {
    branchCompanyId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function branchCompanyAccountDetail(state = initialState, action) {
    switch (action.type) {
        case 'branchCompanyAccountDetail':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default branchCompanyAccountDetail;