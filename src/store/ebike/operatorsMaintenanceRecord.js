const initialState = {
    operatorsMaintenanceRecordCode: '',
    maintenanceRecordSource: '',
    areaPointId: '',
    operatorsMaintenanceMemberId: '',
    maintenanceState: '',
    operatorsId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function operatorsMaintenanceRecord(state = initialState, action) {
    switch (action.type) {
        case 'operatorsMaintenanceRecord':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default operatorsMaintenanceRecord;