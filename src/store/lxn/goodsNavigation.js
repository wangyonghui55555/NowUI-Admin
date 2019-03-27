const initialState = {
    goodsNavigationName: '',
    goodsCategoryId: '',
    goodsNavigationImageId:'',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function goodsNavigation(state = initialState, action) {
    switch (action.type) {
        case 'goodsNavigation':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default goodsNavigation;