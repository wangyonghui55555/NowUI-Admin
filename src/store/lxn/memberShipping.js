const initialState = {
    memberId: '',
    receiverPhone: '',
    receiverName: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function memberShipping(state = initialState, action) {
    switch (action.type) {
        case 'memberShipping':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default memberShipping;