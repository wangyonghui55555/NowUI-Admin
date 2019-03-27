const initialState = {
    riderLevelName: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function riderLevel(state = initialState, action) {
    switch (action.type) {
        case 'riderLevel':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default riderLevel;