const initialState = {
    distributionOrderCode: '',
    customerId: '',
    customerProviderId: '',
    distributionOrderStatus: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function distributionOrder(state = initialState, action) {
    switch (action.type) {
        case 'distributionOrder':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default distributionOrder;