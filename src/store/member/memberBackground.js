const initialState = {
    memberId: '',
    memberBackgroundImageId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function memberBackground(state = initialState, action) {
    switch (action.type) {
        case 'memberBackground':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default memberBackground;