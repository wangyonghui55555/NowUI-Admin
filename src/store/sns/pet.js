const initialState = {
    memberNickName: '',
    petName: '',
    petCategoryId: '',
    treeData: [],
    treeSelectedKeys: [],
    treeExpandedRowKeys: [],
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function pet(state = initialState, action) {
    switch (action.type) {
        case 'pet':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default pet;