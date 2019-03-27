const initialState = {
    siteId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function siteDividend(state = initialState, action) {
    switch (action.type) {
        case 'siteDividend':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default siteDividend;