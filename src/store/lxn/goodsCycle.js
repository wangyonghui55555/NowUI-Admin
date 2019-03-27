const initialState = {
    goodsName: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function goodsCycle(state = initialState, action) {
    switch (action.type) {
        case 'goodsCycle':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default goodsCycle;