const viewShelfReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SHELF':
            return action.payload
    }
    return state
};

export default viewShelfReducer;