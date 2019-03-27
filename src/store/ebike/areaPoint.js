const initialState = {
    areaPointCode: '',
    areaPointName: '',
    areaId: '',
    areaPointStrategyPriceId: '',
    areaPointStrategyParkingId: '',
    areaPointState: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function areaPoint(state = initialState, action) {
    switch (action.type) {
        case 'areaPoint':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default areaPoint;