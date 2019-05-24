const totalItemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ITEMS':
            return action.payload
    }
    return state
};

export default totalItemsReducer;