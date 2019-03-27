const initialState = {
    no: '',
    goodsName: '',
    goodsCategoryId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function goods(state = initialState, action) {
    switch (action.type) {
        case 'goods':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default goods;