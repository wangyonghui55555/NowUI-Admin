const initialState = {
    riderName: '',
    riderPhone: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function rider(state = initialState, action) {
    switch (action.type) {
        case 'rider':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default rider;