const initialState = {
    goodsId: '',
    orderId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function goodsEvaluation(state = initialState, action) {
    switch (action.type) {
        case 'goodsEvaluation':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default goodsEvaluation;