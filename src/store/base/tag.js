const initialState = {
    tagCategoryId: '',
    tagName: '',
    tagType: '',
    treeData: [],
    treeSelectedKeys: [],
    treeExpandedRowKeys: [],
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function tag(state = initialState, action) {
    switch (action.type) {
        case 'tag':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default tag;