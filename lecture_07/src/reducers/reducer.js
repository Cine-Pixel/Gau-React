export const TYPES = {
    SET_POSTS: "SET_QUESTIONS",
    ADD_POST: "ADD_POST",
    DELETE_POST: "DELETE_POST",
    CLEAR_POSTS: "CLEAR_POSTS",
    HANDLE_POST: "HANDLE_POST"
};

const reducer = (state, action) => {
    switch (action.type) {
        case TYPES.SET_POSTS:
            return { ...state, posts: action.payload };
        case TYPES.ADD_POST:
            return { ...state, posts: [state.post, ...state.posts] };
        case TYPES.DELETE_POST:
            return { ...state, posts: state.posts.filter(post => post.id !== action.payload) };
        case TYPES.CLEAR_POSTS:
            return { ...state, posts: [] };
        case TYPES.HANDLE_POST:
            return { ...state, post: action.payload }
        default:
            return state;
    }
};

export default reducer;