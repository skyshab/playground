import axios from 'axios';
import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE,
} from './blogActionTypes';

const getPostsRequest = () => {
    return {
        type: GET_POSTS_REQUEST,
    };
};

const getPostsSuccess = (posts) => {
    return {
        type: GET_POSTS_SUCCESS,
        posts,
    };
};

const getPostsFailure = (error) => {
    return {
        type: GET_POSTS_FAILURE,
        error,
    };
};

export const getPosts = (dispatch) => {
    dispatch(getPostsRequest());
    axios
        .get('/wp-json/wp/v2/posts')
        .then((res) => {
            const posts = res.data.map((post) => {
                const imageId = post.featured_media;
                if (imageId) {
                    // this isn't working. the images are not loaded initially
                    axios.get(`/wp-json/wp/v2/media/${imageId}`).then((res) => {
                        post.image = res.data;
                    });
                }
                return post;
            });
            dispatch(getPostsSuccess(posts));
        })
        .catch((error) => {
            dispatch(getPostsFailure(error));
        });
};
