const initialState = {
    goodsId: '',
    cityId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function goodsNextDay(state = initialState, action) {
    switch (action.type) {
        case 'goodsNextDay':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default goodsNextDay;