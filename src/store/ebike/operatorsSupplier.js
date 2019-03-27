const initialState = {
    operatorsSupplierCode: '',
    operatorsSupplierName: '',
    industryCategory: '',
    operatorsId: '',
    operatorsSupplierState: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function operatorsSupplier(state = initialState, action) {
    switch (action.type) {
        case 'operatorsSupplier':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default operatorsSupplier;