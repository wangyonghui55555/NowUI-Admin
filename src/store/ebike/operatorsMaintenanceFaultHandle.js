const initialState = {
    operatorsMaintenanceFaultHandleCode: '',
    operatorsMaintenanceFaultId: '',
    handleOperationType: '',
    handleRemark: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function operatorsMaintenanceFaultHandle(state = initialState, action) {
    switch (action.type) {
        case 'operatorsMaintenanceFaultHandle':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default operatorsMaintenanceFaultHandle;