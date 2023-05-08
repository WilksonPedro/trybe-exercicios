const INITIAL_STATE = { count: 0 };

const counterReducer = (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case "INCREMENT_COUNTER":
            return { count: state.count + action.payLoad };
        default:
            return state;
    }
};

export default counterReducer;