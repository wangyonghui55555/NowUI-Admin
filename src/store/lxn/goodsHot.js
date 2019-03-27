const initialState = {
    goodsName: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function goodsHot(state = initialState, action) {
    switch (action.type) {
        case 'goodsHot':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default goodsHot;