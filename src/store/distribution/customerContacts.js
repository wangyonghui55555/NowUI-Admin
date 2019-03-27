const initialState = {
    customerContactsName: '',
    customerContactsPhone: '',
    customerContactsDepartment: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function customerContacts(state = initialState, action) {
    switch (action.type) {
        case 'customerContacts':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default customerContacts;