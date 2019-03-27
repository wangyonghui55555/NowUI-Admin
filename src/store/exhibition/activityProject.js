const initialState = {
    activityStart: '',
    activityProjectItem: '',
    activityProjectRange: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function activityProject(state = initialState, action) {
    switch (action.type) {
        case 'activityProject':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default activityProject;