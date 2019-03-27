const initialState = {
    wechatMiniAppId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function wechatMini(state = initialState, action) {
    switch (action.type) {
        case 'wechatMini':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default wechatMini;