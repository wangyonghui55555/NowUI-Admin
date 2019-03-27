const initialState = {
    menuId: '',
    roleId: '',
    roleAdminMenuMapId:'',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function roleMenuMap(state = initialState, action) {
    switch (action.type) {
        case 'roleMenuMap':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default roleMenuMap;