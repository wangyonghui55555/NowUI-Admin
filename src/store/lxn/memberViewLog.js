const initialState = {
    memberId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function memberViewLog(state = initialState, action) {
    switch (action.type) {
        case 'memberViewLog':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default memberViewLog;