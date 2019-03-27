const initialState = {
    facilitiesBikeId: '',
    facilitiesBikePartsTypeId: '',
    facilitiesBikePartsState: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function facilitiesBikeParts(state = initialState, action) {
    switch (action.type) {
        case 'facilitiesBikeParts':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default facilitiesBikeParts;