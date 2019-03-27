const initialState = {
    reservoirAreaName: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function reservoirArea(state = initialState, action) {
    switch (action.type) {
        case 'reservoirArea':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default reservoirArea;