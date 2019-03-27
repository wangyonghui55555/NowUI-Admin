const initialState = {
    goodsAfterServiceName: '',
    afterServiceIsEnabled: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function goodsAfterService(state = initialState, action) {
    switch (action.type) {
        case 'goodsAfterService':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default goodsAfterService;