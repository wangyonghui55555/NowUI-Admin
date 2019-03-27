const initialState = {
    adminAccount: '',
    adminNickName: '',
    adminRoleMapId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function adminrole(state = initialState, action) {
    switch (action.type) {
        case 'adminrole':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default adminrole;