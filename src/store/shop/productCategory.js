const initialState = {
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function productCategory(state = initialState, action) {
    switch (action.type) {
        case 'productCategory':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default productCategory;