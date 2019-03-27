const initialState = {
    companyContactsName: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function companyContacts(state = initialState, action) {
    switch (action.type) {
        case 'companyContacts':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default companyContacts;