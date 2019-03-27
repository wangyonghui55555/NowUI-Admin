const initialState = {
    tagFrontendCategoryName: '',
    tagFrontendCategoryCategoryCode: '',
    tagFrontendCategoryCode: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function tagFrontendCategory(state = initialState, action) {
    switch (action.type) {
        case 'tagFrontendCategory':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default tagFrontendCategory;