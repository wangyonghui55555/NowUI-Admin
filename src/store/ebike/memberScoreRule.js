const initialState = {
    ruleType: '',
    ruleState: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function memberScoreRule(state = initialState, action) {
    switch (action.type) {
        case 'memberScoreRule':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default memberScoreRule;