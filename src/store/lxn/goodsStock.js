const initialState = {
    goodsId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function goodsStock(state = initialState, action) {
    switch (action.type) {
        case 'goodsStock':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default goodsStock;