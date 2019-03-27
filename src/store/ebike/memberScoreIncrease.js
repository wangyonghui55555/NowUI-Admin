const initialState = {
    memberId: '',
    memberScoreRuleId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function memberScoreIncrease(state = initialState, action) {
    switch (action.type) {
        case 'memberScoreIncrease':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default memberScoreIncrease;