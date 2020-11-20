import React from 'react';
import PostItem from './PostItem';
import { connect } from 'react-redux';
import { ReactComponent as LoadingIcon } from '../loading.svg';

const Posts = ({ loading, posts, error }) => {
    return (
        <div className='posts container mx-auto p-4'>
            {loading && <LoadingIcon />}
            {posts.length >= 1 &&
                posts.map((post) => {
                    return <PostItem key={post.id} post={post} />;
                })}
            {error && <h2>error</h2>}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        posts: state.blog.posts,
        loading: state.blog.loading,
        error: state.blog.error,
    };
};

export default connect(mapStateToProps)(Posts);
