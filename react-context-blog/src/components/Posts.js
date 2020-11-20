import React, { useContext } from 'react';
import PostItem from './PostItem';
import { ReactComponent as LoadingIcon } from '../loading.svg';
import { blogContext } from '../context/blogContext';

const Posts = () => {
    const { posts, loading, error } = useContext(blogContext);

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

export default Posts;
