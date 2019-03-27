const initialState = {
    companyNo: '',
    companyNameId:'',
    companyName:'',
    companyAddress: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function company(state = initialState, action) {
    switch (action.type) {
        case 'company':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default company;