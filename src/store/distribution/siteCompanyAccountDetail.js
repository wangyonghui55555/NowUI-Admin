const initialState = {
    siteAccountType: '',
    siteRemark: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function siteCompanyAccountDetail(state = initialState, action) {
    switch (action.type) {
        case 'siteCompanyAccountDetail':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default siteCompanyAccountDetail;