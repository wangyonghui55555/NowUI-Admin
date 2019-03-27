const initialState = {
    operatorsId: '',
    priceStrategyName: '',
    startingPrice: '',
    timeIsCharging: '',
    minTime: '',
    timeUnit: '',
    unitTimePrice: '',
    subPrice: '',
    subFreeTime: '',
    mileageIsCharging: '',
    minMileage: '',
    mileageUnit: '',
    unitMileagePrice: '',
    strategyState: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function areaPointStrategyPrice(state = initialState, action) {
    switch (action.type) {
        case 'areaPointStrategyPrice':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default areaPointStrategyPrice;