const initialState = {
    uploading_People: '',
    uploading_Time: '',
    picture_Src: '',
    related_Sites: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function orderStatistics(state = initialState, action) {
    switch (action.type) {
        case 'orderStatistics':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default orderStatistics;