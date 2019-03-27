const initialState = {
    productCategoryId: '',
    productCategoryAttributeName: '',
	treeData: [],
	treeSelectedKeys: [],
	treeExpandedRowKeys: [],
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function productCategoryAttribute(state = initialState, action) {
    switch (action.type) {
        case 'productCategoryAttribute':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default productCategoryAttribute;