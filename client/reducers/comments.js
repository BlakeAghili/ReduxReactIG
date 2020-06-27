//1: The Action comes in. Information about what happened.
//2: Copy of the current state.

function comments(state = [], action) {
    console.log(state, action);
    return state;
}

export default comments();

