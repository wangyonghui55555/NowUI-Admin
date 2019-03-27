const initialState = {
    companyAccountType: '',
    companyRemark: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function companyAccountDetail(state = initialState, action) {
    switch (action.type) {
        case 'companyAccountDetail':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default companyAccountDetail;