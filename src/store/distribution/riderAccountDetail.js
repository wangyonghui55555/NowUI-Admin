const initialState = {
    riderId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function riderAccountDetail(state = initialState, action) {
    switch (action.type) {
        case 'riderAccountDetail':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default riderAccountDetail;