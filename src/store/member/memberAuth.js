const initialState = {
    memberId: '',
    memberAccount: '',
    memberMobile: '',
    memberEmail: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function memberAuth(state = initialState, action) {
    switch (action.type) {
        case 'memberAuth':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default memberAuth;