const initialState = {
    operatorsMaintenanceMemberCode: '',
    operatorsMaintenanceMemberName: '',
    idCardNo: '',
    phone: '',
    operatorsId: '',
    operatorsMemberState: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function operatorsMaintenanceMember(state = initialState, action) {
    switch (action.type) {
        case 'operatorsMaintenanceMember':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default operatorsMaintenanceMember;