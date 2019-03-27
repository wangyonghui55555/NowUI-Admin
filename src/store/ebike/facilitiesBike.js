const initialState = {
    facilitiesBikeCode: '',
    netCode: '',
    areaPointId: '',
    facilitiesBikeState: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function facilitiesBike(state = initialState, action) {
    switch (action.type) {
        case 'facilitiesBike':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default facilitiesBike;