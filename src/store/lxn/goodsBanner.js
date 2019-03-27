const initialState = {
    cityName: '',
    goodsBannerImageId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function goodsBanner(state = initialState, action) {
    switch (action.type) {
        case 'goodsBanner':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default goodsBanner;