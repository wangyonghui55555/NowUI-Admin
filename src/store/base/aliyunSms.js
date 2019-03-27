const initialState = {
    aliyunSmsAccessKeyId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function aliyunSms(state = initialState, action) {
    switch (action.type) {
        case 'aliyunSms':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default aliyunSms;