const initialState = {
    merchatName: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function merchant(state = initialState, action) {
    switch (action.type) {
        case 'merchant':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default merchant;