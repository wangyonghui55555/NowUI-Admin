const initialState = {
    memberId: '',
    productId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function memberCart(state = initialState, action) {
    switch (action.type) {
        case 'memberCart':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default memberCart;