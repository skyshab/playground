import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE,
} from './blogActionTypes';

export const initialState = {
    loading: false,
    posts: [],
    error: '',
};

export const blogReducer = (state, action) => {
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

        default:
            return state;
    }
};
