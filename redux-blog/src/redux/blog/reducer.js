import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE,
    DELETE_POST,
} from './actionTypes';

const initState = {
    loading: false,
    posts: [],
    error: '',
};

const blogReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GET_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.posts,
                error: '',
            };

        case GET_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                posts: [],
                error: action.error,
            };

        case DELETE_POST:
            let newPosts = state.posts.filter((post) => {
                return post.id !== action.id;
            });

            return {
                ...state,
                posts: newPosts,
            };

        default:
            return state;
    }
};

export default blogReducer;
