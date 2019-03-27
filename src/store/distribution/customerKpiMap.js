const initialState = {
    customerId: '',
    customerKpiTypeId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function customerKpiMap(state = initialState, action) {
    switch (action.type) {
        case 'customerKpiMap':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default customerKpiMap;