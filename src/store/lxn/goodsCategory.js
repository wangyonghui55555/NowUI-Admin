const initialState = {
    goodsCategoryParentId: '',
    goodsCategoryName: '',
    goodsCategoryCode: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function goodsCategory(state = initialState, action) {
    switch (action.type) {
        case 'goodsCategory':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default goodsCategory;