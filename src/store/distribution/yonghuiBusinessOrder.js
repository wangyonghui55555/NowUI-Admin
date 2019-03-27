const initialState = {
    warehouse_Name: '',
    distributor_Name: '',
    distributor_Start_Time: '',
    distributor_End_Time: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function yonghuiBusinessOrder(state = initialState, action) {
    switch (action.type) {
        case 'yonghuiBusinessOrder':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default yonghuiBusinessOrder;