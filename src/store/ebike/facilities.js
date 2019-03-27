const initialState = {
    facilitiesCode: '',
    facilitiesType: '',
    areaPointAroundId: '',
    facilitiesState: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function facilities(state = initialState, action) {
    switch (action.type) {
        case 'facilities':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default facilities;