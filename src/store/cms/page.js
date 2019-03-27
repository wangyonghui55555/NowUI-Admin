const initialState = {
    pageCategoryId: '',
    pageTitle: '',
    pageCode: '',
	treeData: [],
	treeSelectedKeys: [],
	treeExpandedRowKeys: [],
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function page(state = initialState, action) {
    switch (action.type) {
        case 'page':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default page;