const initialState = {
    operatorsId: '',
    parkingStrategyName: '',
    strategyState: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function areaPointStrategyParking(state = initialState, action) {
    switch (action.type) {
        case 'areaPointStrategyParking':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default areaPointStrategyParking;