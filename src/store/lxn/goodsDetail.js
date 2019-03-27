const initialState = {
    goodsId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function goodsDetail(state = initialState, action) {
    switch (action.type) {
        case 'goodsDetail':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default goodsDetail;