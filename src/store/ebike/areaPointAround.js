const initialState = {
    aroundCode: '',
    aroundName: '',
    areaPointId: '',
    aroundState: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function areaPointAround(state = initialState, action) {
    switch (action.type) {
        case 'areaPointAround':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default areaPointAround;