const initialState = {
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function pageCategory(state = initialState, action) {
    switch (action.type) {
        case 'pageCategory':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}
export default pageCategory;