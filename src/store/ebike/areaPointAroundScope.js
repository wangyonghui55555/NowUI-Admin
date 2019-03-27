const initialState = {
    relationType: '',
    relationId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function areaPointAroundScope(state = initialState, action) {
    switch (action.type) {
        case 'areaPointAroundScope':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default areaPointAroundScope;