const viewShelfReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SHELF':
            return action.payload;
        case 'DELETE_ITEM':
            
    }
    return state
};

export default viewShelfReducer;