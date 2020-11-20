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
        .all([
            axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10'),
            axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10'),
        ])
        .then(
            axios.spread((posts, photos) => {
                const newPosts = posts.data.map((post) => {
                    const image = photos.data.find(
                        (photo) => photo.id === post.id
                    );
                    post.url = image.url;
                    post.thumb = image.thumbnailUrl;
                    return post;
                });
                dispatch(getPostsSuccess(newPosts));
            })
        )
        .catch((error) => {
            dispatch(getPostsFailure(error));
        });
};
