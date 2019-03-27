const initialState = {
    operatorsCode: '',
    operatorsName: '',
    operatorsPhone: '',
    operatorsAddressProvince: '',
    operatorsAddressCity: '',
    operatorsAddressArea: '',
    operatorsAddressAddress: '',
    operatorsState: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function operators(state = initialState, action) {
    switch (action.type) {
        case 'operators':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default operators;