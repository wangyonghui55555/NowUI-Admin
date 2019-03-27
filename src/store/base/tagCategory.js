const initialState = {
    tagCategoryParentId: '',
    tagCategoryName: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function tagCategory(state = initialState, action) {
    switch (action.type) {
        case 'tagCategory':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default tagCategory;