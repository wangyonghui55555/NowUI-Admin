const initialState = {
    orderCode: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function complaint(state = initialState, action) {
    switch (action.type) {
        case 'complaint':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default complaint;