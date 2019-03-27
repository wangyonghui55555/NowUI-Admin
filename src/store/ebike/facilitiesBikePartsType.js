const initialState = {
    facilitiesBikePartsTypeName: '',
    facilitiesBikePartsTypeModel: '',
    facilitiesBikePartsTypeState: '',
    operatorsSupplierId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function facilitiesBikePartsType(state = initialState, action) {
    switch (action.type) {
        case 'facilitiesBikePartsType':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default facilitiesBikePartsType;