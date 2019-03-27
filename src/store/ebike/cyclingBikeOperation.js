const initialState = {
    memberId: '',
    facilitiesBikeId: '',
    bikeOperationType: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function cyclingBikeOperation(state = initialState, action) {
    switch (action.type) {
        case 'cyclingBikeOperation':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default cyclingBikeOperation;