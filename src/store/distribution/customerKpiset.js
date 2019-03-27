const initialState = {
    kpiTypeName: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function customerKpiset(state = initialState, action) {
    switch (action.type) {
        case 'customerKpiset':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default customerKpiset;