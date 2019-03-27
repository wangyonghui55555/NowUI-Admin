const initialState = {
    memberSearchKey: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function memberSearch(state = initialState, action) {
    switch (action.type) {
        case 'memberSearch':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default memberSearch;