const initialState = {
    productCategoryAttributeGroupName: '',
	treeData: [],
	treeSelectedKeys: [],
	treeExpandedRowKeys: [],
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function productCategoryAttributeGroup(state = initialState, action) {
    switch (action.type) {
        case 'productCategoryAttributeGroup':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default productCategoryAttributeGroup;