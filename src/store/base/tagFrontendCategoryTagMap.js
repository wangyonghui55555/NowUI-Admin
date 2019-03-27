const initialState = {
    tagFrontendCategoryId: '',
    tagId: '',
	treeData: [],
	treeSelectedKeys: [],
	treeExpandedRowKeys: [],
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function tagFrontendCategoryTagMap(state = initialState, action) {
    switch (action.type) {
        case 'tagFrontendCategoryTagMap':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default tagFrontendCategoryTagMap;