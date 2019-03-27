const initialState = {
    no: '',
    carNo: '',
    reservoirAreaName: '',
    customerName: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function goodsDelivery(state = initialState, action) {
    switch (action.type) {
        case 'goodsDelivery':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default goodsDelivery;