const initialState = {
    operatorsMaintenanceFaultCode: '',
    operatorsMaintenanceRecordId: '',
    areaPointId: '',
    relationType: '',
    relationId: '',
    faultDetail: '',
    uploadSource: '',
    uploadMemberId: '',
    operatorsId: '',
    faultIsConfirm: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function operatorsMaintenanceFault(state = initialState, action) {
    switch (action.type) {
        case 'operatorsMaintenanceFault':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default operatorsMaintenanceFault;