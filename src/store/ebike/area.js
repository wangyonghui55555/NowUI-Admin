const initialState = {
    operatorsId: '',
    areaName: '',
    areaCode: '',
    areaState: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function area(state = initialState, action) {
    switch (action.type) {
        case 'area':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default area;