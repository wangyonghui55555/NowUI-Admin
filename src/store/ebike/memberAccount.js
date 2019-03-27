const initialState = {
    memberId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function memberAccount(state = initialState, action) {
    switch (action.type) {
        case 'memberAccount':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default memberAccount;